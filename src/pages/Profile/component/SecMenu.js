import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { sizes } from "@src/constans/sizes";
import ButtonMenu from "./ButtonMenu";

const SecMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center", paddingTop: sizes(20) }}>
      <ButtonMenu
        onPress={() => {}}
        title={"My Account"}
        icName={"account-circle"}
      />
      <ButtonMenu
        onPress={() => {}}
        title={"Privacy & Policy"}
        icName={"shield-alert"}
      />
      <ButtonMenu
        onPress={() => {}}
        title={"Help & Center"}
        icName={"alert-octagram"}
      />
    </View>
  );
};

export default SecMenu;

const styles = StyleSheet.create({});
