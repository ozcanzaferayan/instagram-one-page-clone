import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

const MyIcon = (props: any) => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme].tint;
    return (
        <TouchableOpacity style={{ ...styles.container, ...props.style }} onPress={props.onPress}>
            <Ionicons size={24} name={props.name} color={color} />
        </TouchableOpacity>
    )
}

export default MyIcon

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4
    }
});
