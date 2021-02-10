import React from 'react'
import { View, Text } from './Themed';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

const PostHeader = () => {
    return (
        <View style={styles.postHeader}>
            <ProfileImage />
            <ProfileNameAndLocation />
            <Actions />
        </View>
    )
}


export const ProfileImage = () => {
    return (
        <TouchableOpacity>
            <Image source={{ uri: 'https://picsum.photos/id/237/50/50' }}
                style={{ width: 32, height: 32, borderRadius: 32 }} />
        </TouchableOpacity>
    )
}

const ProfileNameAndLocation = () => {
    return (
        <TouchableOpacity style={styles.profileNameAndLocation} >
            <Text>zaferayan</Text>
            <Text>İstanbul</Text>
        </TouchableOpacity>
    )
}

const Actions = () => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme].tint;
    return (
        <TouchableOpacity>
            <Ionicons size={24} name="ellipsis-horizontal" color={color} />
        </TouchableOpacity>
    )
}




export default PostHeader

const styles = StyleSheet.create({
    postHeader: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',

    },
    profileNameAndLocation: {
        flex: 1,
        paddingHorizontal: 12,
    }
});
