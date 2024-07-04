import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Normal from '../assets/gacha/gacha-image-01.png';
import Premium from '../assets/gacha/gacha-image-02.png';

const Gacha = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Image source={Normal} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image source={Premium} style={styles.image}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  box: {
    width: 345,
    height: 275,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default Gacha