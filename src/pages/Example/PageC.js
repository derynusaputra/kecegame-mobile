import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.container]}></View>;

const SecondRoute = () => <View style={[styles.container]}></View>;
const PageC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const routes = [
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ];
  return (
    <View style={{flex: 1, marginTop: 100}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default PageC;

const styles = StyleSheet.create({});
