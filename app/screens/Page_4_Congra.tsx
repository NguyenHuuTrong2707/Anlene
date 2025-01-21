import React from 'react';
import Page_4_Component from '../components/Page_4_Component';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { LinearGradient } from 'expo-linear-gradient';
import usePageData_Page4 from '../../hooks/usePagaData_Page4';
const Page_4_Congra: React.FC = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
    const pageData = usePageData_Page4('Page_4');
    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={{ flex: 1 }}
        >
            <Page_4_Component
                txtTitle='XIN CHÚC MỪNG!'
                txtTitleColor={{ color: '#E8E276' }}
                txtWarning={warningMessage}
                warningImage={{uri : pageData?.imgWarning}}
                txtRemind={pageData?.contentGreen}
                imageProduct={{uri : pageData?.imgProduct2}}
                colorTitleFooter={{ color: "#ECD24A" }}
                txtFooter={pageData?.footerGreen}
                buttonText='Mua ngay'
                colorShowMore={{ color: '#ECD24A' }}
            />
        </LinearGradient>
    );
};
export default Page_4_Congra;