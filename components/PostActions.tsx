import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { View, Text } from './Themed';
import { StyleSheet } from 'react-native';
import MyIcon from './MyIcon';

const PostActions = () => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme].tint;
    return (
        <View style={styles.container}>
            <MyIcon name="heart-outline" />
            <MyIcon name="chatbubble-outline" />
            <MyIcon name="send-outline" />
            <View style={{ flex: 1 }} />
            <MyIcon name="bookmark-outline" />
        </View>
    )
}

export default PostActions


const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        flexDirection: 'row',
        paddingHorizontal: 8
    }
});
