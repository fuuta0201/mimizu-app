import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import mimizu from '../assets/mimizu.png';
import rocket from '../assets/game/rocket.png';

const Game = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomBox}>
        <View style={styles.mimizuBox}>
          <Image source={mimizu} style={styles.mimizu}/>
        </View>
        <View style={styles.panel}>
          <Text style={styles.text}>ゲームの説明をするよ</Text>
        </View>
        <View style={styles.rocketBox}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            <Image source={rocket} style={styles.rocket}></Image>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  bottomBox: {
    width: '100%',
    height: 300,
    backgroundColor: '#C9C9C9',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  mimizuBox: {
    width: 145,
    height: 180,
    borderRadius: '100%',
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mimizu: {
    width: 110,
    height: 150,
  },
  panel: {
    width: 210,
    height: 125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '700'
  },
  rocketBox: {
    width: '100%',
    height: 400,
    position: 'absolute',
    bottom: 226,
  },
  scrollView: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  rocket: {
    width: 76,
    height: 390,
    marginHorizontal: 160,
  },
}); 

export default Game