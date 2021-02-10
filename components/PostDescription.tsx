import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text } from './Themed';

const PostDescription = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>500px 🇨🇦 🇨🇦 🇨🇦</Text>
        </TouchableOpacity>
    )
}

export default PostDescription

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 12
    }
});
