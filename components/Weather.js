import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import propTypes from 'prop-types'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

export const Weather = ({temp, condition, description}) => {

    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
    });

    if (!fontsLoaded || !temp || !condition || !description) {
        return <AppLoading/>;
    } else {
        return (
            <LinearGradient colors={weatherCombination[condition].gradient} style={styles.container}>
                <StatusBar color={'white'} backgroundColor={weatherCombination[condition].gradient[0]} barStyle={'light-content'}/>
                <View style={styles.half}>
                    <MaterialCommunityIcons name={weatherCombination[condition]?.iconName} size={100} color="white"/>
                    <Text style={{...styles.temp, fontFamily: 'Comfortaa_400Regular'}}>{Math.round(temp)}°</Text>
                </View>
                <View style={styles.half}>
                    <Text style={{...styles.title, fontFamily: 'Comfortaa_400Regular'}}>{weatherCombination[condition]?.title}</Text>
                    <Text style={{...styles.subtitle, fontFamily: 'Comfortaa_400Regular',}}>{description}</Text>
                </View>
            </LinearGradient>
        );
    }
}

Weather.propTypes = {
    temp: propTypes.number,
    condition: propTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado', 'Clear', 'Clouds']),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        fontSize: 38,
        color: 'white',

    },
    half: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHalf: {
         paddingHorizontal: 15
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    }
});

export const weatherCombination = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Thunderstorm',
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Drizzle',
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        title: 'Rain',
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#b6fbff', '#e7f8fc'],
        title: 'Snow',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Mist',
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#141E30', '#243B55'],
        title: 'Smoke',
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Haze',
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Dust',
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#141E30', '#243B55'],
        title: 'Fog',
    },
    Sand: {
        iconName: 'weather-windy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Sand',
    },
    Ash: {
        iconName: 'weather-hail',
        gradient: ['#757F9A', '#a4a4a9'],
        title: 'Ash',
    },
    Squall: {
        iconName: 'weather-hurricane',
        gradient: ['#14253c', '#042160'],
        title: 'Squall',
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#14253c', '#757F9A', '#042160'],
        title: 'Tornado',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2f80ed'],
        title: 'Clear',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Clouds',
    }
}