import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContext, { BlogProvider } from '../context/BlogContext';

const IndexScreen = () => {
const blogPosts = useContext(BlogContext);
const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Text>Index Screen</Text>
      <Button 
        title="Add Post"
        onPress={addBlogPost}
      />
      <FlatList 
        data={data}
        keyExtractor={(blogPosts)=>blogPosts.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>
        }}
      >
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;