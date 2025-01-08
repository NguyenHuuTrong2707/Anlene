import { ActivityIndicator, Button, View, Text } from "react-native";
import { useFonts } from 'expo-font';
import { app } from './firebase/firebase'; 
import { getFirestore, collection, getDocs, DocumentData } from "firebase/firestore";  
import { useState } from 'react'; 

interface Step {
  id: string;
  title: string;
  status: boolean;
}

export default function Index() {
  const [fontsLoaded] = useFonts({
    'SVN-Gotham': require('../assets/fonts/SVN-Gotham Black.otf'),
  });

  const [data, setData] = useState<Step[] | null>(null);  

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Cập nhật hàm guiDuLieu để đọc dữ liệu từ Firestore
  async function guiDuLieu() {
    const db = getFirestore(app);  // Lấy đối tượng Firestore từ app đã được khởi tạo
    try {
      // Lấy tất cả các tài liệu từ collection 'steps'
      const querySnapshot = await getDocs(collection(db, 'steps'));
      const stepsData: Step[] = [];
      // Duyệt qua tất cả các tài liệu và lấy dữ liệu
      querySnapshot.forEach((doc) => {
        // Đảm bảo dữ liệu được ánh xạ đúng kiểu
        const stepData = doc.data() as Omit<Step, 'id'>;
        stepsData.push({ id: doc.id, ...stepData });
      });
      setData(stepsData);  
      console.log("Dữ liệu đã được lấy thành công:", stepsData);
    } catch (error) {
      console.error("Lỗi khi đọc dữ liệu:", error);
    }
  }

  return (
    <View>
      <Button onPress={guiDuLieu} title="Đọc dữ liệu" />
      {data ? (
        data.map((item) => (
          <Text key={item.id}>{`ID: ${item.id}, Title: ${item.title}, Status: ${item.status}`}</Text>
        ))
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
}
