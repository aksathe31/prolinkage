import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Recents = () => {
  return (
    <View style={styles.container}>
      <Text>This is Recents</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Recents;

{/*Sample Data:
export const data = [
    {
      id: 1,
      username: 'Mark Heider',
      title: 'How Immune Systems and Covid-19 Interact',
      readtime: '2 min',
      profilePic: 'your profile pic url here',
      image: 'your image url here'
    },
]
*/}