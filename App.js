import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, ScrollView, FlatList, Alert, RefreshControl } from 'react-native';
import WeatherIndc from './WeatherIndc';

const App = () => {

    const [forecast, setForecast] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const loadForecast = async () => {
        setRefreshing(true);
        const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=57.79403549999999&lon=11.9802118`
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            Alert.alert(`Error retrieving weather data: ${data.message}`);
        } else {
            forecastFunc(data.properties.timeseries);
        }

        setRefreshing(false);
    }

    const forecastFunc = (data) => {
        let daysData = []
        data.map((x, index) => {
            if (index === 0) {
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let dateTime = x.time;
                var now = new Date();
                var currentDay = days[now.getDay()];
                let currentTime = dateTime.slice(11, 16);
                let currentDate = dateTime.slice(5, 10).split('-').reverse().join('-');
                x.dateDayTime = currentDate + " " + currentDay + ' ' + currentTime;
                daysData.push(x);
            } else {
                let date = daysData[daysData.length - 1].time;
                date = date.slice(8, 10);
                let newDate = x.time;
                newDate = newDate.slice(8, 10);
                if (date !== newDate) {
                    let current = x.data;
                    let currentIcon = current.next_6_hours.summary.symbol_code;
                    let currentDate = x.time;
                    currentDate = currentDate.slice(5, 10).split('-').reverse().join('-');
                    x.date = currentDate;
                    daysData.push(x);
                }
            }
        })

        setForecast(daysData);
        setInterval(function () { loadForecast() }, 60 * 1000);
    }

    useEffect(() => {
        loadForecast()
    }, [])

    if (!forecast) {
        return <SafeAreaView style={styles.loading}>
            <ActivityIndicator size="large" />
        </SafeAreaView>;
    }

    let current = forecast[0].data;
    let currentTemp = current.instant.details.air_temperature;
    let currentSpeed = current.instant.details.wind_speed;
    let currentIcon = current.next_6_hours.summary.symbol_code;
    let dayTime = forecast[0].dateDayTime;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        onRefresh={() => { loadForecast() }}
                        refreshing={refreshing}
                    />}

            >
                <Text style={styles.title}>Weather</Text>
                <Text style={styles.subtitle}>Gothenburg</Text>
                <WeatherIndc currentTemp={currentTemp} currentSpeed={currentSpeed} CrntIcnSrc={currentIcon} iconType={"largeIcon"} text={dayTime} />

                <View>
                    <Text style={styles.subtitle}>Next 7 Days</Text>
                    <FlatList horizontal
                        data={forecast.slice(1, 8)}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={a => {
                            let current = a.item.data;
                            let currentTemp = current.instant.details.air_temperature;
                            let currentSpeed = current.instant.details.wind_speed;
                            let currentIcon = current.next_6_hours.summary.symbol_code;
                            return <WeatherIndc currentTemp={currentTemp} currentSpeed={currentSpeed} CrntIcnSrc={currentIcon} iconType={"smallIcon"} text={a.item.date} />
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        width: '100%',
        textAlign: 'center',
        fontSize: 42,
        color: '#e96e50',
        borderBottomWidth: 2
    },
    subtitle: {
        fontSize: 24,
        width: '100%',
        textAlign: 'center',
        marginVertical: 2,
        color: '#e96e50',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default App;