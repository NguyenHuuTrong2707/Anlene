import React from 'react';
import SubmitComponent from '../../components/SubmitComponent';
import {useRouter } from 'expo-router';

const SubmitCareful = () => {
    const router = useRouter();
    const handleNavigate = () => {
        router.push('/screens/Welcome'); 
    };
    return (
        <SubmitComponent
            backgroundColor="#969696"
            logoSource={require('../../assets/images/logoAnlene.png')}
            textRed="HOÀN THÀNH BÀI KIỂM TRA"
            textTitle="LƯU Ý MỘT CHÚT!"
            textDic="Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé,
bởi sau tuổi 40,...."
            textInfo="Điền thông tin bên dưới để xem đầy đủ
kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene."
            textcolor={{
                color: '#DF1E13',
            }}
            titlecolor={{
                color: '#DF1E13',
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

export default SubmitCareful;
