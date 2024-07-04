import React from 'react'
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import IconButtonBack from '../assets/icons/button.png';

const ButtonBack = ({ navigation }) => {

  const onPressBack = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableOpacity onPress={onPressBack} style={styles.button}>
      <Image source={IconButtonBack} style={styles.image} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 50,
    left: 24,
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default ButtonBack