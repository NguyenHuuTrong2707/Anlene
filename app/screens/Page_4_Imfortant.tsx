import React from 'react';
import Page_4_Component from '../components/Page_4_Component';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { LinearGradient } from 'expo-linear-gradient';
const Page_4_Imfotant = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
    return (
        <LinearGradient
            colors={['#FD9500', '#FEBF00', '#FB8402']}
            style={{ flex: 1 }}
        >
            <Page_4_Component
                txtTitle='LƯU Ý MỘT CHÚT!'
                txtTitleColor={{ color: '#187B33' }}
                txtWarning={warningMessage}
                warningImage={require('../../assets/images/imagewarning.png')}
                txtRemind='Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không mong muốn.'
                imageProduct={require('../../assets/images/imagepoductImfor.png')}
                colorTitleFooter={{ color: "#376E48" }}
                txtFooter='Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!'
                buttonText='Mua ngay'
                colorShowMore={{ color: '#376E48' }}
            />
        </LinearGradient>
    );
};
export default Page_4_Imfotant;