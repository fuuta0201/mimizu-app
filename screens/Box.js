import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import IconChevronDown from '../assets/icons/chevron-down.png';

const Box = () => {
  const [sortOption, setSortOption] = useState("入手順");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [boxList, setBoxList] = useState([
    {
      id: 1,
      category: 'ご飯アイテム',
      name: 'ミミズすき焼き',
      kana: 'みみずすきやき',
    }, {
      id: 2,
      category: '着せ替えアイテム',
      name: '蝶ネクタイ',
      kana: 'ちょうねくたい',
    }, {
      id: 3,
      category: 'ご飯アイテム',
      name: 'ミミズクッキー',
      kana: 'みみずくっきー',
    }, {
      id: 4,
      category: '着せ替えアイテム',
      name: '靴下',
      kana: 'くつした',
    }, {
      id: 5,
      category: 'ご飯アイテム',
      name: 'ミミズ蒲焼き',
      kana: 'みみずかばやき',
    },
    {
      id: 6,
      category: 'ご飯アイテム',
      name: 'ミミズすき焼き',
      kana: 'みみずすきやき',
    }, {
      id: 7,
      category: '着せ替えアイテム',
      name: '蝶ネクタイ',
      kana: 'ちょうねくたい',
    }, {
      id: 8,
      category: 'ご飯アイテム',
      name: 'ミミズクッキー',
      kana: 'みみずくっきー',
    }, {
      id: 9,
      category: '着せ替えアイテム',
      name: '靴下',
      kana: 'くつした',
    }, {
      id: 10,
      category: 'ご飯アイテム',
      name: 'ミミズ蒲焼き',
      kana: 'みみずかばやき',
    },
  ]);

  const openModal = () => {
    if ( isOpenModal ) {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true)
    }
  }

  const onChangeSelect = (num) => {
    if ( num == 0 ) {
      const sortedList = [...boxList].sort((a, b) => a.id - b.id);
      setBoxList(sortedList);
      setSortOption("入手順");
    } else {
      const sortedList = [...boxList].sort((a, b) => a.kana.localeCompare(b.kana, 'ja'));
      setBoxList(sortedList);
      setSortOption("五十音順");
    }
    setIsOpenModal(false);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.pulldown}
        onPress={openModal}
      >
        <Text style={styles.pulldownText}>{sortOption}</Text>
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
      {isOpenModal && (
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => onChangeSelect(0)}>
            <Text style={styles.name}>入手順</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeSelect(1)}>
            <Text style={styles.name}>五十音順</Text>
          </TouchableOpacity>
        </View>
      )}
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
    fontSize: 22,
    fontWeight: '700',
  }, 
  icon: {
    width: 20,
    height: 12,
  },
  scroll: {
    width: 300,
    height: 600,
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
  modal: {
    position: 'absolute',
    top: 110,
    right: 40,
    width: '40%',
    height: 100,
    padding: 40,
    backgroundColor: '#DCDCDC',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default Box