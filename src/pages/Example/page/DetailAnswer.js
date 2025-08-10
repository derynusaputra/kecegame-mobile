import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MainLayout from "@src/layout/MainLayout";
import { COLOR } from "@src/constans/colors";
import NavigateHeader from "@src/layout/NavigateHeader";
import Markdown from "react-native-markdown-display";
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from "@rivascva/react-native-code-editor";

const DetailAnswer = ({ route }) => {
  console.log("ankong", route);

  return (
    <MainLayout
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOR?.white,
        // paddingTop: 0,
        alignItems: "center",
      }}
      barStyle="dark-content"
      backgroundColor={COLOR?.white}
    >
      <NavigateHeader
        title={"Detail"}
        styles={{
          backgroundColor: COLOR?.white,
        }}
        textColor={COLOR?.black}
        icBgColor={"rgba(255, 255, 255, 0.16)"}
        icColor={COLOR?.black}
        icBorderColor={COLOR?.grey1}
        icRight={true}
      />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          // backgroundColor: 'red',
        }}
      >
        <CodeEditor
          style={{
            ...{
              fontSize: 20,
              inputLineHeight: 26,
              highlighterLineHeight: 26,
            },
            ...(Keyboard.keyboardShown
              ? { marginBottom: Keyboard.keyboardHeight - insets.bottom }
              : {}),
          }}
          readOnly
          initialValue={route?.params?.answer}
          language="javascript"
          syntaxStyle={CodeEditorSyntaxStyles.github}
          showLineNumbers
        />
      </ScrollView>
    </MainLayout>
  );
};

export default DetailAnswer;

const styles = StyleSheet.create({});
