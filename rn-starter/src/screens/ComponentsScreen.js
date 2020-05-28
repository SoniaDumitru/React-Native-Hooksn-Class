import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const age = "31";
    return(
        <View>
            <Text style={styles.textStyle}>Sonia D</Text>
            <Text >My age is:</Text>
            <Text style={styles.subheaderStyle}>{age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
            fontSize: 45
    },
    subheaderStyle: {
        fontSize: 90
    }
})

export default ComponentsScreen;