import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Mimizu from '../components/Mimizu'

const Home = () => {
  return (
    <View style={styles.container}>
      <Mimizu ver={2}></Mimizu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});

export default Home