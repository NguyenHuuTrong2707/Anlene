import { ActivityIndicator,  } from "react-native";
import { useFonts } from 'expo-font';
import { useState } from 'react'; 
import  Welcome  from '../app/screens/Welcome';
import  Test1_6_Co  from '../app/screens/Test1_6_Co';



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
