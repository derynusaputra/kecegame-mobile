import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import LinearGradient from 'react-native-linear-gradient';

const MainNavigator = ({navigation, route}) => {
  
  return <View style={{marginTop: 100}}></View>;
};

export default MainNavigator;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 50,
    width: 200,
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'red',
    backgroundColor: 'transparent',
  },
});
