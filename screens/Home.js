import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Mimizu from '../components/Mimizu'

const Home = () => {
  return (
    <View style={styles.container}>
      <Mimizu ver={2}></Mimizu>
      <View style={styles.commentPanel}>
        <Text style={styles.text}>ミネラルをたくさん含んでいるよ</Text>
      </View>
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
    position: 'relative'
  },
  commentPanel: {
    width: 210,
    height: 70,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 280,
    right: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  }
});

export default Home