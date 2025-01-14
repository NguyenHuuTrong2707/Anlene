import React from 'react';
import SubmitComponent from '../../components/SubmitComponent';
import { useRouter } from 'expo-router';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const SubmitYellow = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);

    const router = useRouter();
    const handleNavigate = () => {
        router.push('/screens/Page_2');
    };
    return (
        <SubmitComponent
            backgroundColor="#FEBF00"
            logoSource={require('../../assets/images/logoAnlene.png')}
            textRed="HOÀN THÀNH BÀI KIỂM TRA"
            textTitle="LƯU Ý MỘT CHÚT!"
            textDic={warningMessage}
            textInfo="Điền thông tin bên dưới để xem đầy đủ
kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene."
            textcolor={{
                color: '#376E48',
            }}
            titlecolor={{
                color: '#376E48',
            }}
            errortext={{
                color: '#376E48',
            }}
            star={{
                color: '#376E48',
            }}
            onConfirmNavigate={handleNavigate}
        />
    );
};

export default SubmitYellow;
