// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { isIOS } from "@rneui/base";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import {COLOR} from '@src/constants/colors';
// import FocusAwareStatusBar from "@src/hooks/Component/constants/CustomHooks";
// import { useTheme } from "@react-navigation/native";

import { useTheme } from "@react-navigation/native";
import { isIOS } from "@rneui/base";
import { COLOR } from "@src/constans/colors";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FocusAwareStatusBar from "./FocusAwareStatusBar";

const MainLayout = ({
  children,
  style,
  backgroundColor = "transparent",
  barStyle = "dark-content",
}) => {
  //   const { colors: COLOR } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: COLOR?.white,
          paddingTop: isIOS ? 0 : insets.top,
          paddingBottom: isIOS ? 0 : insets.bottom,
          // paddingLeft: insets.left,
          // paddingRight: insets.right,
          // paddingHorizontal: sizes(32),
        },
        style,
      ]}
    >
      <FocusAwareStatusBar backgroundColor={backgroundColor} />
      {children}
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    // justifyContent: "center",
    // backgroundColor: ,
    // alignItems: 'center',
  },
});
