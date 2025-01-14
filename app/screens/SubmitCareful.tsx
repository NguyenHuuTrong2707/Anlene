import React from 'react';
import SubmitComponent from '../../components/SubmitComponent';
import { useRouter } from 'expo-router';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const SubmitCareful = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
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
            textDic={warningMessage}
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
