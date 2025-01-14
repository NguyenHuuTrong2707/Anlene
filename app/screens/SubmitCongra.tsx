import React from 'react';
import SubmitComponent from '../../components/SubmitComponent';
import { useRouter } from 'expo-router';

const SubmitCongra = () => {
     const router = useRouter();
        const handleNavigate = () => {
            router.push('/screens/Page_2'); 
        };
    return (
        <SubmitComponent
            backgroundColor="#20680D"
            logoSource={require('../../assets/images/logoAnlene.png')}
            textRed="HOÀN THÀNH BÀI KIỂM TRA"
            textTitle="XIN CHÚC MỪNG!"
            textDic="Bạn có hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt."
            textInfo="Điền thông tin bên dưới để xem đầy đủ
kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene."
            textcolor={{
                color: '#ECD24A',
            }}
            titlecolor={{
                color: '#ECD24A',
            }}
            errortext={{
                color: '#ECD24A',
            }}
            star={{
                color: '#ECD24A',
            }}
            
        />
    );
};

export default SubmitCongra;
