import { ActivityIndicator } from "react-native";
import WelcomeScreen from "./screens/Welcome";
import { useFonts } from 'expo-font';
export default function Index() {
  const [fontsLoaded] = useFonts({
    'SVN-Gotham': require('../assets/fonts/SVN-Gotham Black.otf'),

  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    < WelcomeScreen />
  );
}
