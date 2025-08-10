import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS, IMAGES } from "@src/constans/theme";
import { sizes } from "@src/constans/sizes";
import TextCustom from "@src/components/text/TextCustom";
import { useTheme } from "@react-navigation/native";
import FastImage from "@d11/react-native-fast-image";
import { COLOR } from "@src/constans/colors";
// import {FONTS, ICONS} from '@src/constants/theme';
// import {sizes} from '@src/constants/sizes';
// import TextCustom from '@src/components/Text/TextCustom';
// import {useTheme} from '@react-navigation/native';
// import {COLOR} from '@src/constants/colors';

const SecProfile = () => {
  // const { colors: COLOR } = useTheme();

  return (
    <View
      style={{
        backgroundColor: COLOR?.white,
        alignItems: "center",
        paddingBottom: sizes(25),
      }}
    >
      <FastImage
        style={{
          width: sizes(100),
          height: sizes(100),
          borderRadius: sizes(200),
          borderWidth: sizes(5),
          marginVertical: sizes(19),
          borderColor: COLOR?.grey3,
        }}
        source={IMAGES?.myFoto}
        resizeMode="cover"
        // tintColor={'red'}
      />
      <TextCustom
        value={"Dery Ahmad Kamalino"}
        // width={sizes(200)}
        textAlign="center"
        fontSize={sizes(24)}
        color={COLOR?.black}
        fontFamily={FONTS?.fontsBold}
      />
      <TextCustom
        value={"Expert Mobile Developer"}
        // width={sizes(200)}
        textAlign="center"
        fontSize={sizes(14)}
        color={COLOR?.grayText}
        fontFamily={FONTS?.fontsMedium}
      />
    </View>
  );
};

export default SecProfile;

const styles = StyleSheet.create({});
