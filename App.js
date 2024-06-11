import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/Tabs';
import bgImage from './assets/background.png';
import Home from './screens/Home';
import Box from './screens/Box';
import Gacha from './screens/Gacha';
import Game from './screens/Game';
import Head from './components/Head';
import Setting from './components/Setting';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Head></Head>
        <Setting></Setting>
        <Home></Home>
        <Tabs navigation={navigation} currentScreen='Home'></Tabs>
      </ImageBackground>
    </View>
  );
}

const BoxScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Head></Head>
        <Setting></Setting>
        <Box></Box>
        <Tabs navigation={navigation} currentScreen='Box'></Tabs>
      </ImageBackground>
    </View>
  );
}

const GachaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Head></Head>
        <Setting></Setting>
        <Gacha></Gacha>
        <Tabs navigation={navigation} currentScreen='Gacha'></Tabs>
      </ImageBackground>
    </View>
  );
}

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Head></Head>
        <Setting></Setting>
        <Game></Game>
        <Tabs navigation={navigation} currentScreen='Game'></Tabs>
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gacha" component={GachaScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
