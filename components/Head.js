import React from 'react'
import { StyleSheet, View } from 'react-native'
import StatusPannel from './StatusPannel'
import CoinPannel from './CoinPannel'

const Head = () => {
  return (
    <View style={styles.head}>
      <StatusPannel></StatusPannel>
      <CoinPannel></CoinPannel>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 60,
  }
});

export default Head