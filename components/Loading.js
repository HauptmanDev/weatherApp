import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Получение погоды...</Text>
        </View>
    );
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
        fontSize: 30
    }
});
