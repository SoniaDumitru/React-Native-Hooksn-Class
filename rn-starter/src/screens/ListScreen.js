import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'sonia'},
        {name: 'diana'},
        {name: 'lili'}
    ]
    return (
        <FlatList 
            data={friends} 
            renderItem={({item}) => {
            return <Text key={item.name}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({});

export default ListScreen;