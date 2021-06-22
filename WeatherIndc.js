import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImgLoc from './weatherIcons/imageLoc';

const WeatherIndc = (props) => {
    const { text, currentTemp, currentSpeed, CrntIcnSrc, iconType } = props;
    return (
        <View style={styles.days}>
            <Text style={styles.subtext}>{text}</Text>
            <Image style={styles[iconType]} source={ImgLoc[CrntIcnSrc]} />
            <Text style={styles.currentTemp}>{Math.round(currentTemp)}°C</Text>
            <Text style={styles.dayWind}>{Math.round(currentSpeed)}m/s</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtext: {
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
        marginVertical: 2,
    },
    currentTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    days: {
        padding: 6,
        alignItems: 'center',
    },
    dayWind: {
        marginLeft: 12,
        alignSelf: 'center',
        fontSize: 20
    },
    largeIcon: {
        alignSelf: 'center',
        width: 250,
        height: 200,
    },
    smallIcon: {
        width: 100,
        height: 100,
    }
});

export default WeatherIndc;