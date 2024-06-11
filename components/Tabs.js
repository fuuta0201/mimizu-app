import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import wood from '../assets/wood.png';

import gacha from '../assets/gacha.png';
import box from '../assets/box.png';
import game from '../assets/game.png';

const Tabs = ({ navigation, currentScreen }) => {

  const onPressBoxButton = (navigation) => {
    if ( currentScreen == 'Home' ) {
      navigation.navigate('Box');
    } else if ( currentScreen == 'Box' ) {
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={wood} resizeMode="cover" style={styles.background}>
        <TouchableOpacity style={styles.button}>
          <Image source={gacha} style={styles.gacha} />
          <Text style={styles.text}>ガチャ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPressBoxButton(navigation)}>
          <Image source={box} style={styles.box} />
          <Text style={styles.text}>BOX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={game} style={styles.game} />
          <Text style={styles.text}>ゲーム</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '2%',
    width: '100%',
    zIndex: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  background: {
    width: 400,
    height: 150,
    objectFit: 'cover',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 26,
    paddingTop: 30
  },
  button: {
    width: 87,
    height: 120,
    borderRadius: 50,
    backgroundColor: 'rgba(187, 148, 89, 0.87)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gacha: {
    width: 75,
    height: 73
  },
  box: {
    width: 90,
    height: 78,
    marginLeft: 10,
  },
  game: {
    width: 56,
    height: 75
  }
});

export default Tabs