import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
// import {sizes} from '@src/constants/sizes';
// import TextCustom from '../Text/TextCustom';
// import {FONTS} from '@src/constants/theme';
import { Icon } from "@rneui/base";
// import Gap from '../gap/Gap';
import { useTheme } from "@react-navigation/native";
import { COLOR } from "@src/constans/colors";
import { sizes } from "@src/constans/sizes";
import TextCustom from "@src/components/text/TextCustom";
import { FONTS } from "@src/constans/theme";
import Gap from "@src/components/gap/Gap";

const ButtonMenu = ({ title, icName, cusRight, onPress }) => {
  // const {colors: COLOR} = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        width: sizes(335),
        height: sizes(76),
        marginBottom: sizes(16),
        backgroundColor: COLOR?.white,
        borderRadius: sizes(10),
        paddingHorizontal: sizes(16),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: sizes(44),
            height: sizes(44),
            borderRadius: sizes(200),
            backgroundColor: COLOR?.grey3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name={icName ?? "checkbox-blank-circle"}
            type="material-community"
            size={sizes(22)}
            color={COLOR?.primary}
            // style={{marginHorizontal: sizes(5), paddingTop: sizes(2)}}
          />
        </View>
        <Gap width={sizes(10)} />
        <TextCustom
          value={title ?? ""}
          //   textAlign="center"
          width={sizes(160)}
          fontSize={sizes(16)}
          color={COLOR?.black}
          fontFamily={FONTS?.fontsBold}
        />
      </View>
      {cusRight ?? (
        <Icon
          name={"chevron-right"}
          type="material-community"
          size={sizes(22)}
          color={COLOR?.primary}
          // style={{marginHorizontal: sizes(5), paddingTop: sizes(2)}}
        />
      )}
    </Pressable>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({});
