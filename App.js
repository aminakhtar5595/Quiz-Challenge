import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Routes from './app/Routes'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

console.disableYellowBox = true;

export default class App extends React.Component {   

  constructor() {
    super();

    this.state = {
      spinner: false,
      fontLoaded: false,
      show: false,
    };
  }

  async componentDidMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('./app/Assets/Fonts/Poppins/Poppins-Regular.ttf'),
      'Poppins-Medium': require('./app/Assets/Fonts/Poppins/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('./app/Assets/Fonts/Poppins/Poppins-SemiBold.ttf'),
      'Poppins-Bold': require('./app/Assets/Fonts/Poppins/Poppins-Bold.ttf'),
      'Poppins-ExtraBold': require('./app/Assets/Fonts/Poppins/Poppins-ExtraBold.ttf'),
      'Poppins-Light': require('./app/Assets/Fonts/Poppins/Poppins-Light.ttf'),
      'YuGothic-Bold': require('./app/Assets/Fonts/Poppins/YuGothic-Bold-01.ttf'),
      'YuGothic-Medium': require('./app/Assets/Fonts/Poppins/YuGothic-Medium-01.ttf')
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    if (!this.state.fontLoaded ) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});