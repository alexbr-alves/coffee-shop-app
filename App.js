import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import {SplashScreen} from 'expo-splash-screen'
import { InfoProvider } from "./src/context/GlobalContext";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold} from "@expo-google-fonts/inter";

import Home from "./src/screens/home";

import AppRoutes from './src/routes/appRoutes'
export default function App() {

  let [fontsLoaded, error] = useFonts({
Inter_400Regular, Inter_500Medium, Inter_600SemiBold,
Inter_700Bold
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();    }
  }, [fontsLoaded])

    if(!fontsLoaded){
      return null
    }

  return (
    <InfoProvider>
     <AppRoutes/>
    </InfoProvider>
  );
}

