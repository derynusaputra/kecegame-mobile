import AsyncStorage from "@react-native-async-storage/async-storage";
import { apirefresh } from "@src/services/apirefresh";
import { Alert } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set, get) => ({
      // **GET - Fetch Posts**
      jwtToken: null,
      setJwtToken: (value) => set({ jwtToken: value }),
    }),

    {
      name: "useGetClubs-storage", // Nama penyimpanan di localStorage atau AsyncStorage
      storage: createJSONStorage(() => AsyncStorage), // Gunakan AsyncStorage untuk React Native
    }
  )
);

export default useAuth;
