import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {
    useFonts,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';
import AppLoading from "expo-app-loading";

export const Loading = () => {

    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar color={'black'} backgroundColor={'#FDF6AA'} barStyle={'dark-content'}/>
                <Text style={{...styles.text, fontFamily: 'Comfortaa_400Regular'}}>Loading...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6AA',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
    },
    text: {
        color: "#2c2c2c",
        fontSize: 20,
    }
});