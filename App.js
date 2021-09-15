import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Loading} from "./components/Loading";
import * as Location from 'expo-location';
import axios from "axios";
import {Weather} from "./components/Weather";

const API_KEY = '8e2549212e2fade72fe5f0f2e3c872dc';

export default function App() {

    let [isLoading, setIsLoading] = useState(true);
    let [temp, setTemp] = useState(null);
    let [condition, setCondition] = useState('');
    let [description, setDescription] = useState('');

    const getWeather = async (latitude, longitude) => {
        return await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    };

    const getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            getWeather(latitude, longitude).then(res => {
                let weatherObj = res.data;
                setTemp(weatherObj?.main.temp);
                setCondition(weatherObj?.weather[0].main)
                setDescription(weatherObj?.weather[0].description)
                setIsLoading(false);
            });
            setIsLoading(false);
        } catch (error) {
            Alert.alert('Не определено местоположение', 'Проверьте допуск к геолокации')
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    if (isLoading || !temp || !description || !condition) {
        return  <Loading/>;
    } else {
        return <Weather temp={temp} condition={condition} description={description}/>;
    }
}