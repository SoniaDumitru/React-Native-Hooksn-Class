import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

// Styles
import styles from './IndexScreen.styles';

const renderItem = ({ item } , navigation, deleteBlogPost) => {
 
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id } )}>
      <View style={styles.row}>
        <Text style={styles.title}>{item.title} - {item.id}</Text>
        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
          <Feather style={styles.icon} name="trash" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={(item) => renderItem(item, navigation, deleteBlogPost)}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather 
          name="plus" 
          size={30} 
        />
      </TouchableOpacity>
    ),
  };
}

export default IndexScreen;
