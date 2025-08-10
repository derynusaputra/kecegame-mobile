import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Icon } from "@rneui/base";
import { COLOR } from "@src/constans/colors";
import { sizes } from "@src/constans/sizes";
import { FONTS, IMAGES } from "@src/constans/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { COLOR } from "@src/constants/colors";
// import Gap from "@src/components/Gap/Gap";
// import { sizes } from "@src/constants/sized";
// import { FONTS, IMAGES } from "@src/constants/theme";

function BottomTab({ state, descriptors, navigation }) {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        height: sizes(50) + inset.bottom,
        flexDirection: "row",
        // position: "absolute",
        width: "auto",
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "flex-end",

        backgroundColor: COLOR?.white,
        borderTopWidth: 1,
        borderTopColor: COLOR?.gray2,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <Pressable
            style={{
              height: sizes(50) + inset.bottom,
              width: sizes(187.5),
              // flex: 1,
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "red",
            }}
            key={index}
            onPress={onPress}
          >
            <View
              style={{
                height: sizes(22),
                width: sizes(75),
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Icon
                type={"ionicon"}
                name={
                  label === "Quis 1"
                    ? "clipboard"
                    : label === "Tips & Tricks"
                    ? "reader-outline"
                    : "person"
                }
                size={sizes(18)}
                color={isFocused ? COLOR.primary : COLOR.grayText}
              />
            </View>
            <Text
              style={{
                fontSize: sizes(10),
                color: isFocused ? COLOR.primary : COLOR.grayText,
                marginBottom: sizes(-2),
                fontFamily: FONTS?.fontsMedium,
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabLink: {
    alignItems: "center",
    padding: 5,
  },
  tabItem: {
    height: 50,
    bottom: 0,
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
  },
  navText: {
    ...FONTS.fontSm,
  },
});

export default BottomTab;
