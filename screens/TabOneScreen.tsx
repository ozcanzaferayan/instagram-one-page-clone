import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Post from '../components/Post';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const data = [
    { key: '1' },
    { key: '2' },
    { key: '3' }
  ]
  return (
    <FlatList
      data={data}
      renderItem={() => <Post />} />
  );
}
