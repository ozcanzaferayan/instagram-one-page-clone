import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { View, Text } from './Themed'

const PostImage = () => {
    return (
        <TouchableOpacity>
            <Image source={{ uri: 'https://picsum.photos/id/823/600/400' }} style={{ width: '100%', height: 400 }} />


        </TouchableOpacity>
    )
}

export default PostImage
