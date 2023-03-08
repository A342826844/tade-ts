import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, extendTheme, Box } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { AppEventsLogger, Settings } from "react-native-fbsdk-next";
import store, { persistor } from "./src/state";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import { useExtendBaseTheme } from "./src/hooks/useExtendBaseTheme";
import Navigation from "./src/navigation";
import React from "react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const themeConfig = useExtendBaseTheme();

  const theme = extendTheme(themeConfig);

  const facebookHandle = React.useCallback(async () => {
    try {
      // Settings.initializeSDK();
      // AppEventsLogger.logEvent("EnterApp", {
      //   date: new Date().toString(),
      // });
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    facebookHandle();
  }, [facebookHandle]);

  if (!isLoadingComplete) return null;

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            translucent={false}
            backgroundColor="transparent"
            style="dark"
          />
          <SafeAreaView mode="padding" style={{ flex: 1 }}>
            <NativeBaseProvider theme={theme}>
              <Navigation colorScheme={colorScheme} />

              {/* {Platform.OS !== "web" && <VConsole />} */}
            </NativeBaseProvider>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
