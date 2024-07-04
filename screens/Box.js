import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import IconChevronDown from '../assets/icons/chevron-down.png';

const Box = () => {

  const boxList = [
    {
      id: 1,
      category: 'ご飯アイテム',
      name: 'ミミズすき焼き',
    }, {
      id: 2,
      category: '着せ替えアイテム',
      name: '蝶ネクタイ',
    }, {
      id: 3,
      category: 'ご飯アイテム',
      name: 'ミミズクッキー',
    }, {
      id: 4,
      category: '着せ替えアイテム',
      name: '靴下',
    }, {
      id: 5,
      category: 'ご飯アイテム',
      name: 'ミミズ蒲焼き',
    },
    {
      id: 6,
      category: 'ご飯アイテム',
      name: 'ミミズすき焼き',
    }, {
      id: 7,
      category: '着せ替えアイテム',
      name: '蝶ネクタイ',
    }, {
      id: 8,
      category: 'ご飯アイテム',
      name: 'ミミズクッキー',
    }, {
      id: 9,
      category: '着せ替えアイテム',
      name: '靴下',
    }, {
      id: 10,
      category: 'ご飯アイテム',
      name: 'ミミズ蒲焼き',
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pulldown}>
        <Text style={styles.pulldownText}>入手順</Text>
        <Image source={IconChevronDown} style={styles.icon}/>
      </TouchableOpacity>
      <ScrollView style={styles.scroll}>
        <View style={styles.list}>
          {boxList.map(item => (
            <TouchableOpacity key={item.id} style={styles.item}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulldown: {
    width: 170,
    height: 56,
    position: 'absolute',
    top: 50,
    right: 0,
    borderColor: '#000',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    backgroundColor: '#D3FFD5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  pulldownText: {
    fontSize: 24,
    fontWeight: '700',
  }, 
  icon: {
    width: 30,
    height: 22,
  },
  scroll: {
    width: 300,
    height: 540,
  },
  list: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  item: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  category: {
    fontSize: 16,
    fontWeight: '700'
  },
  name: {
    fontSize: 20,
    fontWeight: '700'
  },
});

export default Box