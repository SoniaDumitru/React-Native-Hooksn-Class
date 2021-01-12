import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

// Styles
import styles from './IndexScreen.styles';

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>{item.title} - {item.id}</Text>
        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
          <Feather style={styles.icon} name="trash" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={(item) => renderItem(item)}
      />
    </View>
  );
};

export default IndexScreen;
