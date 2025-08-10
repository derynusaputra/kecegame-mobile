import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MainLayout from "@src/layout/MainLayout";
import { COLOR } from "@src/constans/colors";
import HeaderMenu from "../Example/component/HeaderMenu";
import TextCustom from "@src/components/text/TextCustom";
import { sizes } from "@src/constans/sizes";
import { FONTS } from "@src/constans/theme";
import { Icon } from "@rneui/base";
import SecProfile from "./component/SecProfile";
import Gap from "@src/components/gap/Gap";
import SecMenu from "./component/SecMenu";

const Profile = () => {
  return (
    <MainLayout
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOR?.gray2,
        // paddingTop: 0,
        alignItems: "center",
      }}
      barStyle="dark-content"
      backgroundColor={COLOR?.white}
    >
      <HeaderMenu
        title={"My Profile"}
        comRight={
          <Pressable
            onPress={() => {
              // bottomSheetRef?.current?.present();
              //   setModalVisible(true);
            }}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <TextCustom
              value={"Log out"}
              textAlign="center"
              fontSize={sizes(16)}
              color={COLOR?.red}
              fontFamily={FONTS?.fontsBold}
            />
            <Icon
              name={"logout"}
              type="antdesign"
              size={sizes(18)}
              color={COLOR?.red}
              style={{ marginHorizontal: sizes(5), paddingTop: sizes(2) }}
            />
          </Pressable>
        }
      />
      <View
        style={{
          width: sizes(375),
          height: "90%",
          //   backgroundColor: 'red',
        }}
      >
        <ScrollView>
          <SecProfile />
          <SecMenu />
          <Gap height={sizes(100)} />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({});
