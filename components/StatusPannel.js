import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IconHeart from '../assets/icons/heart.png';

const StatusPannel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Image source={IconHeart} style={styles.heart} />
        <Text style={styles.title}>なかよし度</Text>
        <Image source={IconHeart} style={styles.heart} />
      </View>
      <View style={styles.row2}>
        <View style={styles.levelText}>
          <Text style={styles.lv}>Lv. </Text><Text style={styles.level}>1</Text>
        </View>
        <View style={styles.levelBack}>
          <View style={styles.levelStatus}></View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    //top: 60,
    //left: 20,
    width: 245,
    height: 64,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  row1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heart: {
    width: 21,
    height: 24,
  },
  title: {
    color: '#BB9459',
    fontSize: 20,
    fontWeight: 'bold',
  },
  levelText: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5
  },
  lv: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  level: {
    fontSize: 32,
    color: '#BB9459',
    fontWeight: 'bold',
  },
  levelBack: {
    width: 142,
    height: 16,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#AAA',
  },
  levelStatus: {
    width: '60%',
    height: '100%',
    backgroundColor: '#BB9459',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  }
});

export default StatusPannel