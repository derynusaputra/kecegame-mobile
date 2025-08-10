import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Icon } from "@rneui/base";
import TextCustom from "@src/components/text/TextCustom";
import { FONTS } from "@src/constans/theme";
import { COLOR } from "@src/constans/colors";
import { sizes } from "@src/constans/sizes";
import Gap from "@src/components/gap/Gap";

const CardQuestion = ({ no, item, onPressYa, onPressTidak }) => {
  return (
    <View
      style={{
        // borderBottomWidth: 1,
        width: "100%",
        // borderBottomColor: COLOR.grey1,
        backgroundColor: COLOR.white,
        borderRadius: sizes(10),
        paddingVertical: sizes(15),
        paddingHorizontal: sizes(15),
        marginTop: sizes(20),
      }}
    >
      <TextCustom
        value={item?.name}
        // textAlign={""}
        fontSize={sizes(12.5)}
        color={COLOR?.black}
        // fontFamily={FONTS?.fontsMedium}
      />
      <View
        style={{
          marginTop: sizes(10),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={onPressYa}
          style={{
            width: sizes(345),
            height: sizes(46),
            borderWidth: sizes(1),
            borderColor: COLOR?.grey1,
            borderRadius: sizes(8),
            backgroundColor: item?.answer === 1 ? COLOR?.primary : COLOR?.white,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TextCustom
            value={"See Answer"}
            textAlign={"center"}
            fontSize={sizes(14)}
            color={item?.answer === 1 ? COLOR?.white : COLOR?.primary}
            fontFamily={FONTS?.fontsMedium}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default CardQuestion;

const styles = StyleSheet.create({});
