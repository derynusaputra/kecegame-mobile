import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from '@d11/react-native-fast-image';
import {Icon} from '@rneui/base';
import SwiperFlatList from 'react-native-swiper-flatlist';

const PageA = ({navigation, router}) => {
  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
  return (
    <View style={{marginTop: 100}}>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}>
        <Text
          onPress={() => {
            // navigation?.goBack();
            navigation.navigate('PageB');
          }}
          style={{color: 'red'}}>
          PageA
        </Text>
        <Icon
          name={'chevron-right'}
          type="material-community"
          size={22}
          color={'red'}
        />
      </FastImage>
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          data={colors}
          renderItem={({item}) => (
            <View style={[styles.child, {backgroundColor: item}]}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PageA;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});
