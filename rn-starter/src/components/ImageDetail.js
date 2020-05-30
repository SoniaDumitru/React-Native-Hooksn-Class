import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
    return(
        <Text>
            Show image of {props.title}
        </Text>
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;