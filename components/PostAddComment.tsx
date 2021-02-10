import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MyIcon from './MyIcon';
import { ProfileImage } from './PostHeader';
import { View, Text } from './Themed';

const PostAddComment = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <ProfileImage />
            <Text style={styles.addComment}>Yorum ekle...</Text>
            <Text>❤️  🙌  </Text>
            <MyIcon name="add-circle-outline" />
        </TouchableOpacity>
    )
}

export default PostAddComment

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    addComment: {
        opacity: .5,
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 8
    }

});
