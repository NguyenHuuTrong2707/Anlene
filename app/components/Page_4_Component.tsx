import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { router, useNavigation } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import usePageData_Page4 from '../../hooks/usePagaData_Page4';
interface Page_4Props {
    backgroundColor?: string,
    txtTitle: string,
    txtWarning: string,
    warningImage?: any,
    txtRemind?: string,
    imageProduct?: any,
    colorTitleFooter?: object,
    txtTitleColor?: object,
    colorShowMore?: object,
    txtFooter?: string,
    buttonText: string,
}

const Page_4_Component: React.FC<Page_4Props> = ({
    backgroundColor,
    txtTitle,
    txtWarning,
    warningImage,
    txtRemind,
    imageProduct,
    colorTitleFooter,
    txtFooter,
    buttonText,
    txtTitleColor,
    colorShowMore,


}) => {

    const pageData = usePageData_Page4('Page_4');
    const navigation = useNavigation();
    const [showMore, setShowMore] = useState(false);


    const goToNext = () => {
        router.push('/screens/Page_5');
    };
    const handleBack = () => {
        navigation.goBack();
    };

    //thực hiện cho nút xem thêm
    const handleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <Header
                title="Trang 4/6"
                showBackButton={true}
                logo={require('../../assets/images/home_fill.png')}
                backgroundColor="transparent"
                onBackPress={handleBack}
            />
            <ScrollView>
                <View style={styles.titleContainer}>
                    {/* Logo */}
                    <Image source={require('../../assets/images/logoAnlene.png')} style={styles.logo} />
                    {/* Content */}
                    <View style={styles.content}>
                        <Text style={[styles.txtTitle, txtTitleColor]}>{txtTitle}</Text>
                        <Text style={styles.txtWarning}>{txtWarning}</Text>
                        {/* Warning Image */}
                        <Image source={warningImage} style={styles.warningImage} />
                        {/* Nhắc nhở */}
                        <Text style={styles.txtRemind}>{txtRemind}</Text>
                        {/* Image product */}
                        <Image source={imageProduct} style={styles.imageProduct} />
                        {/* Note */}
                        <View style={styles.note}>
                            <Text style={styles.txtNote}>*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71</Text>
                            <Text style={styles.txtNote}>**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones</Text>
                        </View>
                        <Text style={[styles.titleFooter, colorTitleFooter]}>{pageData?.content1}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.txtFooter}>{txtFooter}</Text>
                            {!showMore && (
                                <Text
                                    style={[styles.txtFooter, colorShowMore, { textDecorationLine: 'underline' }]}
                                    onPress={handleShowMore}
                                >
                                    Xem thêm
                                </Text>
                            )}
                            {showMore && (
                                <Text style={styles.txtShowMore}
                                    onPress={handleShowMore}
                                >
                                    {pageData?.contentShowMore}
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, showMore ? styles.buttonShifted : null]}
                    onPress={goToNext}
                >
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 26,
    },
    content: {
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
    },
    logo: {
        width: 88,
        height: 23,
    },
    txtTitle: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: 700,
        textAlign: 'center',
    },
    txtWarning: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: 500,
        textAlign: 'center',
        color: '#FFF',
    },
    warningImage: {
        width: 340,
        height: 132,
        marginVertical: 10,
    },
    txtRemind: {
        fontSize: 12,
        lineHeight: 17,
        textAlign: 'center',
        fontWeight: 500,
        color: '#FFF',
    },
    imageProduct: {
        width: 282,
        height: 212,
        marginTop: 10,
    },
    note: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 189,
        height: 27,
    },
    txtNote: {
        color: '#FFF',
        fontSize: 6,
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: 8,
        fontWeight: 400,
    },
    titleFooter: {
        fontWeight: 700,
        fontSize: 13,
        lineHeight: 18,
        textAlign: 'center',
        paddingTop: 20,
    },
    footer: {
        flexDirection: 'column',
        width: 340,
        height: 68,
        paddingVertical: 5,
    },
    txtFooter: {
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 400,
        color: '#FFF',
    },
    txtShowMore: {
        fontSize: 11,
        lineHeight: 14,
        textAlign: 'center',
        fontWeight: 400,
        fontStyle: 'italic',
        color: "#FFF",
    },
    button: {
        width: 148,
        height: 44,
        justifyContent: 'center',
        backgroundColor: '#B70002',
        borderRadius: 24,
        borderWidth: 1.5,
        borderColor: '#ECD24A',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
        marginBottom: 5,
    },
    buttonShifted: {
        marginTop: 40,
    },
});

export default Page_4_Component;
