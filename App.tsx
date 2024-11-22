import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/auth";
import { Routes } from "./src/routes";
import { SplashScreen } from "./src/screens/SplashScreen/SplashScreen";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NetworkStatus from "./src/components/NetworkInfo/NetWorkInfo";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <NavigationContainer>
      <SafeAreaView>
        <NetworkStatus/>
      </SafeAreaView>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
