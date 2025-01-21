import React from 'react';
import SubmitComponent from '../components/SubmitComponent';
import { useRouter } from 'expo-router';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { LinearGradient } from 'expo-linear-gradient';
import usePageData_Page3 from '../../hooks/usePageDate_Page3';
const SubmitYellow = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
    const pageData = usePageData_Page3('Page_3')
    //thuc hien cat chuoi phía sau từ nhé..
    const truncateAfterNhe = (str: string) => {
        const nheIndex = str.toLowerCase().indexOf("nhé");  
        if (nheIndex === -1) return str;  
        return str.substring(0, nheIndex + 3) + "..."; 
    };
    const truncatedWarningMessage: string = truncateAfterNhe(warningMessage);
    const router = useRouter();
    const handleNavigate = () => {
        router.push('/screens/Page_4_Imfortant');
    };
    return (
        <LinearGradient
            colors={['#FD9500', '#FEBF00','#FB8402']}
            style={{ flex: 1 }}
        >
            <SubmitComponent
                logoSource={require('../../assets/images/logoAnlene.png')}
                textRed="HOÀN THÀNH BÀI KIỂM TRA"
                textTitle="LƯU Ý MỘT CHÚT!"
                textDic={truncatedWarningMessage}
                textInfo={pageData?.content}
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
        </LinearGradient>
    );
};

export default SubmitYellow;
