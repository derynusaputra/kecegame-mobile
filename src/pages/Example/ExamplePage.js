import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MainLayout from "@src/layout/MainLayout";
import { COLOR } from "@src/constans/colors";
import HeaderMenu from "./component/HeaderMenu";
import { Icon } from "@rneui/base";
import Gap from "@src/components/gap/Gap";
import { sizes } from "@src/constans/sizes";
import CardQuestion from "./component/CardQuestion";

const dataKuis = [
  {
    id: 1,
    name: "1. JSON Array Object (Bebas)",
    answer: `const users = [
  { id: 1, name: 'Andi', age: 25 },
  { id: 2, name: 'Budi', age: 30 },
  { id: 3, name: 'Cici', age: 22 },
];`,
  },
  {
    id: 2,
    name: "2. Tampilkan Label dan Tombol untuk Mengubah Value",
    answer: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const JsonLabel = () => {
  const users = [
    { id: 1, name: 'Andi', age: 25 },
    { id: 2, name: 'Budi', age: 30 },
    { id: 3, name: 'Cici', age: 22 },
  ];
  const [index, setIndex] = useState(0);

  const changeName = () => {
    setIndex((prev) => (prev + 1) % users.length);
  };

  return (
    <View>
      <Text>Nama: {users[index].name}</Text>
      <Button title="Ganti Nama" onPress={changeName} />
    </View>
  );
};`,
  },
  {
    id: 3,
    name: "3. HTTP Request ke URL dan Log Responsenya",
    answer: `useEffect(() => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      console.log("Data fetched:", data);
    })
    .catch(err => console.error(err));
}, []);`,
  },
  {
    id: 4,
    name: "4. Cetak Data ke Dalam Tabel (10 Data Maks)",
    answer: `import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PostTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10)))
      .catch(err => console.error(err));
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', padding: 5, borderBottomWidth: 1 },
  cell: { flex: 1 },
});`,
  },
  {
    id: 5,
    name: "5. Function Menghapus Salah Satu Data",
    answer: `const removePost = (id) => {
  setPosts((prev) => prev.filter(post => post.id !== id));
};`,
  },
  {
    id: 6,
    name: "6. Hapus Salah Satu Key dari Object",
    answer: `const cleanedPost = { ...post };
delete cleanedPost.body;`,
  },
  {
    id: 7,
    name: "7. Function SHA256 Hash dari String",
    answer: `import SHA256 from 'crypto-js/sha256';

const hashString = () => {
  const input = '27062025derypriaifabula';
  const hash = SHA256(input).toString();
  console.log("SHA256:", hash);
};`,
  },
  {
    id: 8,
    name: "8. Debugging testdebug.html dan Identifikasi Error",
    answer: `<!-- Sebelum (Error) -->
<html>
  <body>
    <h1>Test Debug
    <script>
      console.log("Hello);
    </script>
  </body>
</html>

<!-- Sesudah (Fix) -->
<html>
  <body>
    <h1>Test Debug</h1>
    <script>
      console.log("Hello");
    </script>
  </body>
</html>

<!-- Error:
- Line 3: Tag <h1> tidak ditutup
- Line 5: String tidak ditutup dengan tanda petik -->
`,
  },
  {
    id: 9,
    name: "9. Halaman Login LocalStorage (React Native pakai AsyncStorage)",
    answer: `import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('username').then((val) => {
      if (val) setIsLoggedIn(true);
    });
  }, []);

  const login = async () => {
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('password', password);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <View>
      {!isLoggedIn ? (
        <>
          <TextInput placeholder="Username" onChangeText={setUsername} />
          <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
          <Button title="Login" onPress={login} />
        </>
      ) : (
        <>
          <Text>Selamat Datang, {username}</Text>
          <Button title="Logout" onPress={logout} />
        </>
      )}
    </View>
  );
};`,
  },
];

const ExamplePage = ({ navigation }) => {
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
        title={"Kodegiri"}
        isImage={true}
        comRight={
          <View style={{ flexDirection: "row" }}>
            <Icon
              name={"search"}
              type="feather"
              size={sizes(20)}
              color={COLOR?.black}
            />
            <Gap width={sizes(20)} />
            <Icon
              name={"bell"}
              type="feather"
              size={sizes(20)}
              color={COLOR?.black}
            />
          </View>
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
          {dataKuis?.map((value, index) => (
            <CardQuestion
              key={index}
              no={index}
              item={value}
              // onPressTidak={() => updateAnswer(value?.id, 0)}
              onPressYa={() => {
                navigation?.navigate("DetailAnswer", { answer: value?.answer });
              }}
            />
          ))}
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default ExamplePage;

const styles = StyleSheet.create({});
