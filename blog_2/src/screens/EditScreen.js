import React from 'react';
import { View, Text } from 'react-native';

const EditScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Edit Blog: { navigation.getParam('id') }</Text>
        </View>
    )
}

export default EditScreen;