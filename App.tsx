import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <>
      <StatusBar backgroundColor="#0d0d0d" barStyle="light-content" />
      {fontLoaded ? <Home /> : null}
    </>
  );
}
