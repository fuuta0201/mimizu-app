import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import mimizu from '../assets/mimizu.png';

const Mimizu = () => {
  return (
    <>
      <Image source={mimizu} style={styles.mimizu}></Image>
    </>
  )
}

const styles = StyleSheet.create({
  mimizu: {
    width: 200,
    height: 200,
    marginBottom: 5,
  }
});

export default Mimizu