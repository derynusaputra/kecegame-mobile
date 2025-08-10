import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { sizes } from "@src/constans/sizes";

// type FontFamily = 'Poppins-Regular' | 'Poppins-Medium' | 'Poppins-Semibold';

const TextCustom = ({
  onPress,
  value = "",
  style,
  numberOfLines = null,
  width = null,
  fontFamily,
  color,
  fontSize,
  textAlign,
  textDecorationLine,
}) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <View>
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        style={[
          {
            textDecorationLine: textDecorationLine,
            textAlign: textAlign,
            fontFamily: fontFamily,
            fontSize: fontSize ?? sizes(12),
            color: color ?? colors?.black,
            width: width,
          },
          style,
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

export default TextCustom;

const styles = StyleSheet.create({});
