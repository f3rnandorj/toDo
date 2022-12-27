import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#272727" barStyle="light-content" />
      <Home />
    </>
  );
}
