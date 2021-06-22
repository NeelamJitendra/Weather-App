const images = {
    clearsky_day: require('./png/clearsky_day.png'),
    clearsky_night: require('./png/clearsky_night.png'),
    clearsky_polartwilight: require('./png/clearsky_polartwilight.png'),
    cloudy: require('./png/cloudy.png'),
    fair_day: require('./png/fair_day.png'),
    fair_night: require('./png/fair_night.png'),
    fair_polartwilight: require('./png/fair_polartwilight.png'),
    fog: require('./png/fog.png'),
    heavyrain: require('./png/heavyrain.png'),
    heavyrainandthunder: require('./png/heavyrainandthunder.png'),
    heavyrainshowers_day: require('./png/heavyrainshowers_day.png'),
    heavyrainshowers_night: require('./png/heavyrainshowers_night.png'),
    heavyrainshowers_polartwilight: require('./png/heavyrainshowers_polartwilight.png'),
    heavyrainshowersandthunder_day: require('./png/heavyrainshowersandthunder_day.png'),
    heavyrainshowersandthunder_night: require('./png/heavyrainshowersandthunder_night.png'),
    heavyrainshowersandthunder_polartwilight: require('./png/heavyrainshowersandthunder_polartwilight.png'),
    heavysleet: require('./png/heavysleet.png'),
    heavysleetandthunder: require('./png/heavysleetandthunder.png'),
    heavysleetshowers_day: require('./png/heavysleetshowers_day.png'),
    heavysleetshowers_night: require('./png/heavysleetshowers_night.png'),
    heavysleetshowers_polartwilight: require('./png/heavysleetshowers_polartwilight.png'),
    heavysleetshowersandthunder_day: require('./png/heavysleetshowersandthunder_day.png'),
    heavysleetshowersandthunder_night: require('./png/heavysleetshowersandthunder_night.png'),
    heavysleetshowersandthunder_polartwilight: require('./png/heavysleetshowersandthunder_polartwilight.png'),
    heavysnow: require('./png/heavysnow.png'),
    heavysnowandthunder: require('./png/heavysnowandthunder.png'),
    heavysnowshowers_day: require('./png/heavysnowshowers_day.png'),
    heavysnowshowers_night: require('./png/heavysnowshowers_night.png'),
    heavysnowshowers_polartwilight: require('./png/heavysnowshowers_polartwilight.png'),
    heavysnowshowersandthunder_day: require('./png/heavysnowshowersandthunder_day.png'),
    heavysnowshowersandthunder_night: require('./png/heavysnowshowersandthunder_night.png'),
    heavysnowshowersandthunder_polartwilight: require('./png/heavysnowshowersandthunder_polartwilight.png'),
    lightrain: require('./png/lightrain.png'),
    lightrainandthunder: require('./png/lightrainandthunder.png'),
    lightrainshowers_day: require('./png/lightrainshowers_day.png'),
    lightrainshowers_night: require('./png/lightrainshowers_night.png'),
    lightrainshowers_polartwilight: require('./png/lightrainshowers_polartwilight.png'),
    lightrainshowersandthunder_day: require('./png/lightrainshowersandthunder_day.png'),
    lightrainshowersandthunder_night: require('./png/lightrainshowersandthunder_night.png'),
    lightrainshowersandthunder_polartwilight: require('./png/lightrainshowersandthunder_polartwilight.png'),
    lightsleet: require('./png/lightsleet.png'),
    lightsleetandthunder: require('./png/lightsleetandthunder.png'),
    lightsleetshowers_day: require('./png/lightsleetshowers_day.png'),
    lightsleetshowers_night: require('./png/lightsleetshowers_night.png'),
    lightsleetshowers_polartwilight: require('./png/lightsleetshowers_polartwilight.png'),
    lightsnow: require('./png/lightsnow.png'),
    lightsnowandthunder: require('./png/lightsnowandthunder.png'),
    lightsnowshowers_day: require('./png/lightsnowshowers_day.png'),
    lightsnowshowers_night: require('./png/lightsnowshowers_night.png'),
    lightsnowshowers_polartwilight: require('./png/lightsnowshowers_polartwilight.png'),
    lightssleetshowersandthunder_day: require('./png/lightssleetshowersandthunder_day.png'),
    lightssleetshowersandthunder_night: require('./png/lightssleetshowersandthunder_night.png'),
    lightssleetshowersandthunder_polartwilight: require('./png/lightssleetshowersandthunder_polartwilight.png'),
    lightssnowshowersandthunder_day: require('./png/lightssnowshowersandthunder_day.png'),
    lightssnowshowersandthunder_night: require('./png/lightssnowshowersandthunder_night.png'),
    lightssnowshowersandthunder_polartwilight: require('./png/lightssnowshowersandthunder_polartwilight.png'),
    partlycloudy_day: require('./png/partlycloudy_day.png'),
    partlycloudy_night: require('./png/partlycloudy_night.png'),
    partlycloudy_polartwilight: require('./png/partlycloudy_polartwilight.png'),
    rain: require('./png/rain.png'),
    rainandthunder: require('./png/rainandthunder.png'),
    rainshowers_day: require('./png/rainshowers_day.png'),
    rainshowers_night: require('./png/rainshowers_night.png'),
    rainshowers_polartwilight: require('./png/rainshowers_polartwilight.png'),
    rainshowersandthunder_day: require('./png/rainshowersandthunder_day.png'),
    rainshowersandthunder_night: require('./png/rainshowersandthunder_night.png'),
    rainshowersandthunder_polartwilight: require('./png/rainshowersandthunder_polartwilight.png'),
    sleet: require('./png/sleet.png'),
    sleetandthunder: require('./png/sleetandthunder.png'),
    sleetshowers_day: require('./png/sleetshowers_day.png'),
    sleetshowers_night: require('./png/sleetshowers_night.png'),
    sleetshowers_polartwilight: require('./png/sleetshowers_polartwilight.png'),
    sleetshowersandthunder_night: require('./png/sleetshowersandthunder_night.png'),
    sleetshowersandthunder_polartwilight: require('./png/sleetshowersandthunder_polartwilight.png'),
    snow: require('./png/snow.png'),
    snowandthunder: require('./png/snowandthunder.png'),
    snowshowers_day: require('./png/snowshowers_day.png'),
    snowshowers_night: require('./png/snowshowers_night.png'),
    snowshowers_polartwilight: require('./png/snowshowers_polartwilight.png'),
    snowshowersandthunder_day: require('./png/snowshowersandthunder_day.png'),
    snowshowersandthunder_night: require('./png/snowshowersandthunder_night.png'),
    snowshowersandthunder_polartwilight: require('./png/snowshowersandthunder_polartwilight.png'),


}

export default images;