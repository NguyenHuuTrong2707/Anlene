import { ActivityIndicator,  } from "react-native";
import { useFonts } from 'expo-font';
import { useState } from 'react'; 
import  Welcome  from '../app/screens/Welcome';
import  Page_2  from '../app/screens/Page_2';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'SVN-Gotham': require('../assets/fonts/SVN-Gotham Black.otf'),
  });


  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
   <Welcome/>
  );
}
