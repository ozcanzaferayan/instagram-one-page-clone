import React from 'react'
import PostActions from './PostActions'
import PostAddComment from './PostAddComment'
import PostComments from './PostComments'
import PostDescription from './PostDescription'
import PostHeader from './PostHeader'
import PostImage from './PostImage'
import PostLikes from './PostLikes'
import PostTime from './PostTime'
import { StyleSheet } from 'react-native'

const Post = () => {
    return (
        <>
            <PostHeader />
            <PostImage />
            <PostActions />
            <PostLikes />
            <PostDescription />
            <PostComments />
            <PostAddComment />
            <PostTime />
        </>
    )
}

export default Post


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24
    }
});
