import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import IconCoin from '../assets/icons/coin.png';
import IconPlus from '../assets/icons/plus.png';

const CoinPannel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={IconCoin} style={styles.coin} />
        <Text style={styles.text}>300</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={IconPlus} style={styles.plus} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    right: 21,
    width: 85,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    position: 'relative',
    width: 70,
    height: 20,
    backgroundColor: '#BB9459',
    borderRadius: 15,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  coin: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: -14,
  },
  button: {
    width: 19,
    height: 18,
    position: 'absolute',
    right: -10,
  },
  plus: {
    width: '100%',
    height: '100%',
  }
});

export default CoinPannel