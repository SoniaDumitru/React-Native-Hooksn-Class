import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'sonia' },
        { name: 'diana' },
        { name: 'lili' },
        { name: 'sonia' },
        { name: 'diana' },
        { name: 'sonia' },
        { name: 'diana' },
        { name: 'lili' },
        { name: 'sonia' },
        { name: 'diana' },
        { name: 'sonia' },
        { name: 'diana' },
        { name: 'sonia' },
        { name: 'diana' },
        { name: 'lili' },
        { name: 'sonia' },
        { name: 'diana' }
    ]
    return (
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;