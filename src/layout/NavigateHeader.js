import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
// import {sizes} from '@src/constants/sizes';
import { useNavigation, useTheme } from "@react-navigation/native";
// import {FONTS, ICONS} from '@src/constants/theme';
import { sizes } from "@src/constans/sizes";
import TextCustom from "@src/components/text/TextCustom";
import { FONTS, ICONS } from "@src/constans/theme";
import Gap from "@src/components/gap/Gap";
import FastImage from "@d11/react-native-fast-image";
import { Icon } from "@rneui/base";
import { COLOR } from "@src/constans/colors";
// import Gap from '../gap/Gap';

const NavigateHeader = ({
  onPressIcon,
  styles,
  icColor,
  title,
  textColor,
  icBgColor,
  icBorderColor,
  isDarkTheme = false,
  icRight = false,
}) => {
  // const { colors: COLOR } = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          width: sizes(375),
          backgroundColor: COLOR?.primary,
          height: sizes(56),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: sizes(15),
        },
        styles,
      ]}
    >
      <Pressable
        onPress={() => {
          if (onPressIcon) {
            onPressIcon?.();
          } else {
            navigation.goBack();
          }
        }}
        style={{
          height: sizes(40),
          width: sizes(40),
          borderRadius: sizes(100),
          backgroundColor: icBgColor,
          justifyContent: "center",
          alignItems: "center",
          borderColor: icBorderColor ?? icBgColor,
          borderWidth: sizes(1),
        }}
      >
        {/* <FastImage
          style={{
            height: sizes(25),
            width: sizes(25),
            // borderRadius: sizes(200),
            justifyContent: "flex-end",
            // backgroundColor: COLOR.primary3,
            // paddingBottom: sizes(24),
          }}
          source={ICONS?.icArrowLeft}
          resizeMode="contain"
          tintColor={icColor}
        /> */}
        <Icon
          type={"material"}
          name={"keyboard-arrow-left"}
          size={sizes(25)}
          color={COLOR?.primary}
        />
      </Pressable>
      <TextCustom
        value={title}
        textAlign="center"
        fontSize={sizes(16)}
        color={textColor ?? COLOR?.white}
        fontFamily={FONTS?.fontsBold}
      />
      {!icRight ? (
        <Pressable
          onPress={() => {
            if (onPressIcon) {
              onPressIcon?.();
            } else {
              // navigation.goBack();
            }
          }}
          style={{
            height: sizes(40),
            width: sizes(40),
            borderRadius: sizes(100),
            backgroundColor: icBgColor,
            justifyContent: "center",
            alignItems: "center",
            borderColor: icBorderColor ?? icBgColor,
            borderWidth: sizes(1),
          }}
        >
          <FastImage
            style={{
              height: sizes(25),
              width: sizes(25),
              // borderRadius: sizes(200),
              justifyContent: "flex-end",
              // backgroundColor: COLOR.primary3,
              // paddingBottom: sizes(24),
            }}
            source={ICONS?.icMenu}
            tintColor={icColor}
            resizeMode="contain"
          />
        </Pressable>
      ) : (
        <Gap width={sizes(40)} />
      )}
    </View>
  );
};

export default NavigateHeader;

const styles = StyleSheet.create({});
