import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { add } from 'react-native-reanimated';
import { Context } from '../context/BlogContext';

// Styles
import styles from './CreateScreen.styles';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button 
                title='Add Blog Post' 
                onPress = {() => { 
                        addBlogPost(title, content, () => navigation.navigate('Index'));
                    }
                }
            />
        </View>
    )
}

export default CreateScreen;