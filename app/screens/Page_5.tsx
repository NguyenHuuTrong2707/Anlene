import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, LogBox } from 'react-native';
import Header from '../components/Header';
import { useNavigation, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
const WelcomeScreen = () => {
    const router = useRouter();

    const navigation = useNavigation();
    const url = useSelector((state: RootState) => state.warning.url);

    const goToNext = () => {
        router.push(url as any);
    };
    const onGoHome = () => {
        router.push('/screens/Welcome');
    };
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.gradientBackground}
        >
            <SafeAreaView style={styles.container}>
                {/* Thanh tiêu đề */}
                <Header
                    title="Trang 5/6"
                    showBackButton={true}
                    logo={require('../../assets/images/home_fill.png')}
                    backgroundColor="transparent"
                    onBackPress={handleBack}
                    onGoHome={onGoHome}
                />

                <View style={styles.overlayContainer}>
                    {/* Logo */}
                    <Image source={require('../../assets/images/logoAnlene.png')} style={styles.logo} />

                    <Image source={require('../../assets/images/AnleneCoffee.png')} style={styles.imageBanner} />
                    {/* Title and Subtitle */}
                    <LinearGradient
                        colors={['#13500E', '#1F660D', '#20680DE5', '#236E0DD9', '#27750DB2', '#2E820D00']}
                        style={styles.titleContainer}
                    >
                        <View style={styles.titleGroup}>
                            <Text style={styles.title}>
                                CHĂM SÓC CƠ-XƯƠNG-KHỚP
                            </Text>
                            <Text style={styles.title2}>
                                NHẬN LỘC SỨC KHỎE TỪ ANLENE
                            </Text>
                        </View>
                        <Text style={styles.subtitle}>
                            <Text style={styles.subtitle1}>ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!</Text>
                            <Text style={styles.subtitle2}>Hạn sử dụng: 25/07/2021 - 31/07/2021</Text>
                        </Text>
                    </LinearGradient>
                    {/* Card */}
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <Text style={styles.smallText}>MÃ GIẢM GIÁ</Text>
                            <Text style={styles.largeText}>ANLENANMUMW88</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.yellowText}>ÁP DỤNG TẠI</Text>
                            <Image
                                source={require('../../assets/images/LogoLazada.png')}
                                style={styles.logoLaz}
                            />

                        </View>
                    </View>
                    {/* Button */}
                    <TouchableOpacity style={styles.button} onPress={goToNext}>
                        <Text style={styles.buttonText}>MUA NGAY</Text>
                    </TouchableOpacity>
                    {/* Tim hieu ngay */}
                    <TouchableOpacity style={styles.buttonMore} onPress={() => { }}>
                        <Text style={styles.buttonMoreText}>TÌM HIỂU NGAY</Text>
                    </TouchableOpacity>
                    {/* Info bar */}
                    <LinearGradient
                        colors={['#2E820D00', '#478449', '#236E0DD9', '#20680DE5', '#1F660D', '#13500E']}
                        style={styles.inforContainerGradient}
                    >
                        <View
                            style={styles.inforContainer}
                        >
                            {/* Footer */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.footer}>
                                    * Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X, Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada
                                </Text>
                                <Text style={styles.footerSecond}>
                                    * Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </SafeAreaView >
        </LinearGradient >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientBackground: {
        flex: 1,
    },
    checkmark: {
        position: 'absolute',
        top: 30,
        left: 50,
        width: 20,
        height: 15,
        borderRadius: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    overlayContainer: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 98,
        height: 26,
        zIndex: 2,
    },
    inforContainerGradient: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: -20,
        left: 0,
        right: 0,
        zIndex: 2,
        height: '30%',
        justifyContent: 'flex-end',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    inforContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        alignItems: 'center',
    },
    titleGroup: {
        paddingTop: 35,
        textAlign: 'center',
    },
    title: {
        color: '#E1D770',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'SVN-Gotham',
    },
    title2: {
        color: '#E1D770',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'SVN-Gotham',
    },
    subtitle: {
        color: '#FFF',
        textAlign: 'left',
        paddingTop: 20,
        fontFamily: 'SVN-Gotham',
    },
    subtitle1: {
        fontSize: 12,
        fontWeight: '700',
    },
    subtitle2: {
        fontSize: 12,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: 'bold',
        color: 'yellow',
    },
    imageBanner: {
        width: '100%',
        height: 606,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
    },
    cardContainer: {
        width: 250,
        height: 94,
        position: 'absolute',
        top: 520,
        left: '22%',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
        zIndex: 3,
    },
    card: {
        backgroundColor: '#FFF',
        width: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    smallText: {
        color: '#73A442',
        fontSize: 10,
        fontWeight: '700',
        lineHeight: 15,
        textAlign: 'center',
    },
    largeText: {
        color: '#478449',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 23
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    logoLaz: {
        width: 120,
        height: 27,
    },
    yellowText: {
        color: '#ECD24A',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20,
        fontFamily: 'SVN-Gotham',
        paddingLeft: 20,
    },
    button: {
        position: 'absolute',
        top: 620,
        left: '30%',
        right: '25%',
        zIndex: 3,
        backgroundColor: '#B70002',
        height: 44,
        justifyContent: 'center',
        borderRadius: 30,
        width: 184,
        alignItems: 'center',
    },
    buttonMore: {
        position: 'absolute',
        top: 670,
        left: '30%',
        right: '25%',
        zIndex: 3,
        backgroundColor: '#FFF',
        borderRadius: 30,
        borderColor: '#73A442',
        borderWidth: 1.5,
        width: 184,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonMoreText: {
        color: '#73A442',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
    },
    infoItem: {
        width: 86,
        height: 57,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infotextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        color: '#478449',
        fontSize: 13,
        fontWeight: 700,
        textAlign: 'center',
    },
    infoBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 40,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 60,
        paddingHorizontal: 50,
    },
    footerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
    footer: {
        color: '#FFF',
        fontSize: 9,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontStyle: 'italic',
        fontWeight: '400',
    },
    footerSecond: {
        color: '#FFF',
        fontSize: 9,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontStyle: 'italic',
        fontWeight: '400',
        paddingTop: 10,
    },
});

export default WelcomeScreen;
