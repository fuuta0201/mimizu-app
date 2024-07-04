import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import mimizu from '../assets/mimizu.png';
import mimizu2 from '../assets/mimizu-2.png';

const Mimizu = ({ ver }) => {
  return (
    <>
      {ver == 2 && (
        <Image source={mimizu2} style={styles.mimizu2}></Image>
      )}
      {ver != 2 && (
        <Image source={mimizu} style={styles.mimizu}></Image>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  mimizu: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  mimizu2: {
    width: 254,
    height: 340,
    marginBottom: 5,
  }
});

export default Mimizu