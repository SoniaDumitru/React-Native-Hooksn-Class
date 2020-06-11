import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} size={30}></Feather>
                <TextInput 
                    autoCorrect={false}
                    onCapitalize="none"
                    style={styles.inputStyle} 
                    placeholder="SEARCH"
                    value={term}
                    onChangeText={(newTerm) => onTermChange(newTerm)}
                    onEndEditing={() => onTermSubmit()}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
   },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }
});

export default SearchBar;