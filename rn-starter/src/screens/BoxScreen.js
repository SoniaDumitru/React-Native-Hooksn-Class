import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'green', 
        flex: 1

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'green', 
        flex: 1

    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'green', 
        flex: 1
    }
});

export default BoxScreen;
