import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Tabs from './components/Tabs';
import bgImage from './assets/background.png';
import Home from './screens/Home';
import StatusPannel from './components/StatusPannel';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <StatusPannel></StatusPannel>
        <Home></Home>
        <Tabs></Tabs>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BB9459',
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }
});
