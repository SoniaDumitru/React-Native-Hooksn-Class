import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={()=> navigation.navigate('Components')}
        title="Go to Components Demo"/>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
