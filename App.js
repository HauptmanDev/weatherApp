import React, {useEffect, useState} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import {Loading} from "./components/Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = '8e2549212e2fade72fe5f0f2e3c872dc';

export default function App() {

    let [isLoading, setIsLoading] = useState(true);

    const getWeather = async (latitude, longitude) => {
        const weatherObj = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        console.log('@@',weatherObj.data)
    }

    const getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(); // {coords: {latitude, longitude}}
            getWeather(latitude, longitude);
            setIsLoading(false);
            console.log('Location', coords);
        } catch (error) {
            Alert.alert('Не определено местоположение', 'Проверьте допуск к геолокации')
        }

    }

    useEffect(() => {
        getLocation();
    }, []);

    if (isLoading) {
        return  <Loading/>;
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
