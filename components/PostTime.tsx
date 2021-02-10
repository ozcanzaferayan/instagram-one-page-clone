import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text } from './Themed';

const PostTime = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.time}>9 saat önce</Text>
            <Text>  ·  </Text>
            <Text>Çevirisine Bak</Text>
        </TouchableOpacity>
    )
}

export default PostTime

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        flexDirection: 'row'
    },
    time: {
        opacity: .5
    }
});
