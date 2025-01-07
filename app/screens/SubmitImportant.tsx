import React from 'react';
import SubmitComponent from '../../components/SubmitComponent';

const SubmitYellow = () => {
    return (
        <SubmitComponent
            backgroundColor="#FEBF00"
            logoSource={require('../../assets/images/logoAnlene.png')}
            textRed="HOÀN THÀNH BÀI KIỂM TRA"
            textTitle="LƯU Ý MỘT CHÚT!"
            textDic="Có vẻ bạn đang có hệ vận động tốt nhưng cần chú ý đến sức đề kháng hơn nhé..."
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
        />
    );
};

export default SubmitYellow;
