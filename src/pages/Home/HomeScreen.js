import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import HeaderMenu from "../Example/component/HeaderMenu";
import { COLOR } from "@src/constans/colors";
import MainLayout from "@src/layout/MainLayout";
import { sizes } from "@src/constans/sizes";

const HomeScreen = () => {
  // 1. Deret kelipatan 5
  const deretKelipatan5 = () => {
    const result = [];
    for (let i = 50; i <= 100; i += 5) {
      let label = "";
      if (i <= 60) label = "KURANG";
      else if (i <= 70) label = "CUKUP";
      else if (i <= 80) label = "BAIK";
      else label = "LUAR BIASA";
      result.push(`${i} = ${label}`);
    }
    return result;
  };

  // 2. Fibonacci 20 angka
  const fibonacci = () => {
    const result = [];
    for (let i = 0; i < 20; i++) {
      if (i === 0) result.push(0);
      else if (i === 1) result.push(1);
      else result.push(result[i - 1] + result[i - 2]);
    }
    return result.join(", ");
  };

  // 3. Pola bintang
  const tampilBintang = (x) => {
    const result = [];
    for (let i = 1; i <= x; i++) {
      result.push("* ".repeat(i).trim());
    }
    return result;
  };

  // 4. Terbilang angka 4 digit (>2000)
  const terbilang = (angka) => {
    const satuan = [
      "",
      "Satu",
      "Dua",
      "Tiga",
      "Empat",
      "Lima",
      "Enam",
      "Tujuh",
      "Delapan",
      "Sembilan",
    ];
    const belasan = [
      "Sepuluh",
      "Sebelas",
      "Dua Belas",
      "Tiga Belas",
      "Empat Belas",
      "Lima Belas",
      "Enam Belas",
      "Tujuh Belas",
      "Delapan Belas",
      "Sembilan Belas",
    ];

    const konversi = (n) => {
      if (n < 10) return satuan[n];
      if (n < 20) return belasan[n - 10];
      if (n < 100) {
        return (
          satuan[Math.floor(n / 10)] +
          " Puluh" +
          (n % 10 ? " " + satuan[n % 10] : "")
        );
      }
      if (n < 1000) {
        const ratus = Math.floor(n / 100);
        return (
          (ratus === 1 ? "Seratus" : satuan[ratus] + " Ratus") +
          (n % 100 ? " " + konversi(n % 100) : "")
        );
      }
      if (n < 10000) {
        const ribu = Math.floor(n / 1000);
        return (
          (ribu === 1 ? "Seribu" : satuan[ribu] + " Ribu") +
          (n % 1000 ? " " + konversi(n % 1000) : "")
        );
      }
      return "";
    };

    if (angka < 2000 || angka > 9999) return "Angka tidak valid";
    return konversi(angka);
  };

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
      <HeaderMenu title={"Kodegiri"} isImage={true} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>1. Deret Kelipatan 5</Text>
        {deretKelipatan5().map((item, index) => (
          <Text key={index} style={styles.item}>
            {item}
          </Text>
        ))}

        <Text style={styles.title}>2. Deret Fibonacci (20 angka)</Text>
        <Text style={styles.item}>{fibonacci()}</Text>

        <Text style={styles.title}>3. Pola Bintang (x = 4)</Text>
        {tampilBintang(4).map((line, index) => (
          <Text key={index} style={styles.item}>
            {line}
          </Text>
        ))}

        <Text style={styles.title}>4. Terbilang 4 digit</Text>
        {[2234, 8500, 7001].map((num, i) => (
          <Text key={i} style={styles.item}>
            {num} = {terbilang(num)}
          </Text>
        ))}
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes(20),
    // marginTop: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: sizes(18),
    fontWeight: "bold",
    marginTop: sizes(20),
  },
  item: {
    fontSize: sizes(16),
    marginVertical: sizes(2),
  },
});

export default HomeScreen;
