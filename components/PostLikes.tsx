import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text } from './Themed';

const PostLikes = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>7.617 beğenme</Text>
        </TouchableOpacity>
    )
}

export default PostLikes

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 12
    }
});
