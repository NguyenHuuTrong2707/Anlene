import React from 'react';
import Page_4_Component from '../components/Page_4_Component';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import usePageData_Page4 from '../../hooks/usePagaData_Page4';
const Page_4_CareFul: React.FC = () => {
    const warningMessage = useSelector((state: RootState) => state.warning.message);
    const pageData = usePageData_Page4('Page_4');
    return (
        <Page_4_Component
            txtTitle='HÃY CẨN THẬN!'
            backgroundColor='#969696'
            txtTitleColor={{color: '#DF1E13'}}
            txtWarning={warningMessage}
            warningImage={{uri : pageData?.imgWarning}}
            txtRemind={pageData?.contentGrey}
            imageProduct={{uri : pageData?.imgProduct2}}
            colorTitleFooter ={{ color : "#ECD24A"}}
            txtFooter={pageData?.footerGrey}
            buttonText='Nhận ngay'
            colorShowMore={{color :'#ECD24A'}}
        />
    );
};
export default Page_4_CareFul;