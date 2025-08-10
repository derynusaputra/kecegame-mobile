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
    name: "Cara Menjadi Gamer yang Baik",
    answer: `Mulai dari dasar: tentukan tujuan main (hiburan, kompetitif, konten). Bangun kebiasaan sehat—pemanasan jari, atur postur, istirahat tiap 60–90 menit.
Buat jadwal main yang konsisten, catat progres (rank, KDA, aim training), dan evaluasi mingguan. Jaga etika: jangan toxic, hormati tim, belajar dari kekalahan.`,
  },
  {
    id: 2,
    name: "Cara Menyiapkan Perangkat & Koneksi",
    answer: `Pastikan HP minimal RAM 4–6 GB dan penyimpanan lega. Matikan sync/unduhan saat main, aktifkan mode performa/game mode.
Stabilkan jaringan: pakai Wi-Fi 5/6 atau seluler 4G/5G dengan ping < 50 ms. Tutup aplikasi latar belakang, aktifkan “Low Latency Mode” bila ada.`,
  },
  {
    id: 3,
    name: "Cara Mengatur Kontrol & Sensitivitas",
    answer: `Gunakan layout kustom: posisikan tombol tembak, scope, lompat, crouch agar mudah dijangkau.
Atur sensitivitas gyro/kamera bertahap (naik 5–10 poin), uji di Training Ground. Simpan beberapa preset (agresif/defensif) dan evaluasi recoil/turn speed.`,
  },
  {
    id: 4,
    name: "Cara Memahami Role & Meta (Mobile Legends)",
    answer: `Kenali tiap role: EXP, Gold, Mid, Roam, Jungle—tugas utama & timing rotasinya. Pelajari 2–3 hero inti per role (comfort picks) dan 1 counter pick.
Ikuti patch notes/meta: prioritas objektif (Turtle/Lord), emblem/insight build, dan sinergi tim (CC chain, front-to-back).`,
  },
  {
    id: 5,
    name: "Cara Push Rank Efektif (Mobile Legends)",
    answer: `Main di jam stabil (ping rendah), duo/tri dengan role pelengkap. Draft cerdas: ban hero OP, pilih counter, jangan force comfort bila komposisi timpang.
Fokus objektif: turret > kill. Rotasi: setelah menang lane, bantu objektif, reset wave, ambil vision di semak aman.`,
  },
  {
    id: 6,
    name: "Cara Rotasi & Zona (PUBG Mobile)",
    answer: `Rencanakan jalur dari flight path: drop aman, loot cepat (2–3 menit), lalu rotasi ke high ground/compound aman.
Baca zona: rotasi lebih awal (edge vs center strategy). Gunakan smoke/grenade untuk crossing, cek pintu/vehicle spawn sebagai indikator musuh.`,
  },
  {
    id: 7,
    name: "Cara Aim & Kontrol Recoil (PUBG Mobile)",
    answer: `Latihan harian 10–15 menit: tracking, flick, spray control di Training/TD. Mulai dengan AR (M416/Scar-L) lalu SMG/DP-28.
Kontrol recoil: tarik vertikal halus, burst pada jarak menengah, tap untuk jarak jauh. Pilih scope sesuai jarak, atur sensitivitas ADS terpisah.`,
  },
  {
    id: 8,
    name: "Cara Komunikasi & Teamwork",
    answer: `Gunakan callout singkat & jelas: arah (kompas), jarak, jumlah musuh, kondisi (HP/skill/ult). Tandai lokasi (ping/marker) sebelum bicara.
Tetapkan IGL (shotcaller). Review komunikasi pasca game: apa yang telat di-call, kapan harus reset/commit.`,
  },
  {
    id: 9,
    name: "Cara Manajemen Waktu & Kesehatan",
    answer: `Pakai teknik 60–90/10: main 60–90 menit, istirahat 10 menit (stretching, minum). Batasi sesi ranked saat lelah/tilted.
Jaga hidrasi, cahaya ruangan, dan posisi duduk. Targetkan 7–8 jam tidur agar refleks & fokus terjaga.`,
  },
  {
    id: 10,
    name: "Cara Membuat Game (Garis Besar)",
    answer: `Mulai dari konsep: genre, core loop, target platform. Buat GDD (Game Design Document) singkat.
Pilih engine (Unity/Unreal/Godot). Bangun prototipe: 1 level, 1 mekanik inti. Lakukan playtest cepat, iterasi berdasarkan feedback.
Belajar version control (Git), atur scope kecil dulu, rilis demo/alpha untuk validasi.`,
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
