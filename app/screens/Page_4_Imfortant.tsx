import React from 'react';
import Page_4_Component from '../components/Page_4_Component';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { LinearGradient } from 'expo-linear-gradient';
import usePageData_Page4 from '../../hooks/usePagaData_Page4';
const Page_4_Imfotant: React.FC = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
    const pageData = usePageData_Page4('Page_4');
    return (
        <LinearGradient
            colors={['#FD9500', '#FEBF00', '#FB8402']}
            style={{ flex: 1 }}
        >
            <Page_4_Component
                txtTitle='LƯU Ý MỘT CHÚT!'
                txtTitleColor={{ color: '#187B33' }}
                txtWarning={warningMessage}
                warningImage={{uri: pageData?.imgWarning}} 
                txtRemind = {pageData?.contentYellow}
                imageProduct={{uri : pageData?.imgProduct1}}
                colorTitleFooter={{ color: "#376E48" }}
                txtFooter={pageData?.footerYellow}
                buttonText='Mua ngay'
                colorShowMore={{ color: '#376E48' }}
            />
        </LinearGradient>
    );
};
export default Page_4_Imfotant;