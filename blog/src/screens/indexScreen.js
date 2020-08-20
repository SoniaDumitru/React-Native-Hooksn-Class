import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return(
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <EvilIcons style={styles.icon} name="trash" size={24} color="black" />
          </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderTopWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingVertical: 10,
  },
  title : {
    fontSize: 18
  },
  icon : {
    fontSize: 24
  }
});

export default IndexScreen;