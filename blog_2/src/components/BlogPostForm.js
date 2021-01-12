import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

// Styles
import styles from './BlogPostForm.styles';

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
                title='Save Blog Post' 
                onPress = {() => { 
                        // addBlogPost(title, content, () => navigation.navigate('Index'));
                    }
                }
            />
        </View>
    )
}

export default BlogPostForm;