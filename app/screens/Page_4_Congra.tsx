import React from 'react';
import Page_4_Component from '../components/Page_4_Component';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { LinearGradient } from 'expo-linear-gradient';
const Page_4_Congra = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={{ flex: 1 }}
        >
            <Page_4_Component
                txtTitle='XIN CHÚC MỪNG!'
                txtTitleColor={{ color: '#E8E276' }}
                txtWarning={warningMessage}
                warningImage={require('../../assets/images/imagewarning.png')}
                txtRemind='Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỏi thường xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.'
                imageProduct={require('../../assets/images/imageproduct.png')}
                colorTitleFooter={{ color: "#ECD24A" }}
                txtFooter='Cùng Anlene giúp bạn chăm sóc sức khoẻ
                   Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn
                   đang chờ bạn!'
                buttonText='Mua ngay'
                colorShowMore={{ color: '#ECD24A' }}
            />
        </LinearGradient>
    );
};
export default Page_4_Congra;