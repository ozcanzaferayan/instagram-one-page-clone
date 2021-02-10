import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text } from './Themed';

const PostComments = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>26 yorumun tümünü gör</Text>
        </TouchableOpacity>
    )
}

export default PostComments

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 12
    }
});
