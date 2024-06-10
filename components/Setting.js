import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import IconSetting from '../assets/icons/setting.png'

const Setting = () => {
  return (
   <TouchableOpacity style={styles.button}>
      <Image source={IconSetting} style={styles.icon} />
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 105,
    right: 20,
  },
  icon: {
    width: '100%',
    height: '100%',
  }
});

export default Setting