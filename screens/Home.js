import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image, ImageBackground} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/homebg2.jpg')} style={styles.storyImage}>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>The Book Finder</Text>
            </View>
       
          <View style={styles.textContainer}>
           <Text> Note: Use the navigation to read stories.</Text>
          </View>
          
          <View style={{ flex: 0.08 }} />
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    textAlign:"center"
  },
  appTitleText: {
    color: "#BE3E36",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    alignSelf:"center"
  },
  storyImage:{
    width:"100%",
    height:'100%',
    alignSelf: "center"
    },
  textContainer:{
    color: "blue",
    paddingTop:RFValue(20),
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    textAlign:"center"
  }
});
