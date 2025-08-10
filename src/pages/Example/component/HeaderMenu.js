import { View, Text } from "react-native";
import React from "react";
import { sizes } from "@src/constans/sizes";
import { COLOR } from "@src/constans/colors";
import TextCustom from "@src/components/text/TextCustom";
import { FONTS, IMAGES } from "@src/constans/theme";
import FastImage from "@d11/react-native-fast-image";

const HeaderMenu = ({ title, comRight, isImage }) => {
  //   const { colors: COLOR } = useTheme();

  return (
    <View
      style={{
        width: sizes(375),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLOR.white,
        paddingTop: sizes(25),
        paddingBottom: sizes(19),
        paddingHorizontal: sizes(20),
      }}
    >
      {isImage ? (
        <FastImage
          style={{ width: sizes(130), height: sizes(30) }}
          source={IMAGES?.logo}
          resizeMode={FastImage.resizeMode.contain}
        ></FastImage>
      ) : (
        <TextCustom
          value={title ?? ""}
          textAlign="center"
          fontSize={sizes(20)}
          color={COLOR?.black}
          fontFamily={FONTS?.fontsBold}
        />
      )}

      {/* <>{comRight}</> */}
    </View>
  );
};

export default HeaderMenu;
