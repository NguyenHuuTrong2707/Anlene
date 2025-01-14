import React from 'react';
import Page_4_Component from '../components/Page_4_Component';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
const Page_4_CareFul = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
    return (
        <Page_4_Component
            txtTitle='HÃY CẨN THẬN!'
            backgroundColor='#969696'
            txtTitleColor={{color: '#DF1E13'}}
            txtWarning={warningMessage}
            warningImage={require('../../assets/images/imagewarning.png')}
            txtRemind='Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỏi thường xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.'
            imageProduct={require('../../assets/images/imageproduct.png')}
            colorTitleFooter ={{ color : "#ECD24A"}}
            txtFooter='Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!'
            buttonText='Nhận ngay'
            colorShowMore={{color :'#ECD24A'}}
        />
    );
};
export default Page_4_CareFul;