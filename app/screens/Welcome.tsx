import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import Header from '../../components/Header';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
    const router = useRouter();

    const goToTest1 = () => {
        router.push('/screens/Page_2');
    };

    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.gradientBackground}
        >
            <SafeAreaView style={styles.container}>
                {/* Thanh tiêu đề */}
                <Header
                    title="Trang 1/6"
                    showBackButton={false}
                    logo={require('../../assets/images/logoAnlene.png')}
                    iconStyle={{ width: 60, height: 16 }}
                    backgroundColor='transparent'
                />

                <View style={styles.overlayContainer}>
                    <Image source={require('../../assets/images/banner.png')} style={styles.imageBanner} />
                    {/* Title and Subtitle */}
                    <LinearGradient
                        colors={['#13500E', '#1F660D', '#20680DE5', '#236E0DD9', '#27750DB2', '#2E820D00']}
                        style={styles.titleContainer}
                    >
                        <Text style={styles.title}>
                            TẾT BẬN RỘN{'\n'}CƠ-XƯƠNG-KHỚP CÓ KHỎE{'\n'}ĐỂ CHU TOÀN?
                        </Text>


                        <Text style={styles.subtitle}>
                            Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?
                            {'\n'}Ngay lúc này, hãy{' '}
                            <Text style={styles.highlight}>
                                Kiểm tra Sức khoẻ Cơ-Xương-Khớp
                            </Text>{' '}
                            cùng Anlene để Tết này cả nhà vui khoẻ đón Tết, trọn vẹn niềm vui.
                        </Text>
                    </LinearGradient>
                    {/* Button */}

                    <TouchableOpacity style={styles.button} onPress={goToTest1}>
                        <Text style={styles.buttonText}>KIỂM TRA NGAY</Text>
                    </TouchableOpacity>
                    {/* Info bar */}
                    <LinearGradient
                        colors={['#2E820D00', '#478449', '#236E0DD9', '#20680DE5', '#1F660D', '#13500E']}
                        style={styles.inforContainerGradient}
                    >
                        <View
                            style={styles.inforContainer}
                        >
                            <View style={styles.infoBar}
                            >
                                <LinearGradient style={styles.infoItem}
                                    colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
                                >
                                    <ImageBackground
                                        source={require('../../assets/images/vector1.png')}
                                        style={[styles.imageBackground, { height: 45 }]}
                                    >
                                        <View style={styles.textContainer}>
                                            <Text style={styles.infoText}>MIỄN</Text>
                                            <Text style={styles.infoText}>PHÍ</Text>
                                        </View>
                                        <Image source={require('../../assets/images/vector2.png')} style={styles.checkmark} />
                                    </ImageBackground>
                                </LinearGradient>
                                <LinearGradient style={styles.infoItem}
                                    colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
                                >
                                    <Text style={[styles.infoText, { fontSize: 16, lineHeight: 16 }]}>Chỉ 5 phút</Text>
                                </LinearGradient>
                                <LinearGradient style={styles.infoItem}
                                    colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
                                >
                                    <ImageBackground
                                        source={require('../../assets/images/vectorvoucher.png')}
                                        style={[styles.imageBackground, { height: 35 }]}
                                    >
                                        <View style={[styles.infotextContainer]}>
                                            <Text style={[styles.infoText, { fontSize: 8 }]}>Voucher</Text>
                                            <Text style={[styles.infoText, { fontSize: 16 }]}>100K</Text>
                                        </View>
                                    </ImageBackground>
                                </LinearGradient>
                            </View>
                            {/* Footer */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.footer}>
                                    Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene
                                </Text>
                                <Text style={styles.footerSecond}>
                                    Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    // inforContainer: {
    //     paddingHorizontal: 25,
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     zIndex: 2,
    //     height: '30%',
    //     justifyContent: 'flex-end',
    // },
   
    inforContainerGradient: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
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
        flexDirection: 'column', // Sắp xếp nội dung thành cột
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        paddingHorizontal: 25,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#E1D770',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 8,
        fontFamily: 'SVN-Gotham',
    },
    subtitle: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 16.14,
        paddingHorizontal: 10,
        fontFamily: 'SVN-Gotham',
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
    button: {
        position: 'absolute',
        top: 560,
        left: '25%',
        right: '25%',
        zIndex: 3,
        backgroundColor: '#B70002',
        paddingVertical: 12,
        borderRadius: 30,
        width: 230,
        borderColor: '#E1D770',
        borderWidth: 1.5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
    },
    infoItem: {
        paddingHorizontal: 10,
        width: 86,
        height: 57,
        borderRadius: 18,
        borderColor: 'green',
        borderWidth: 1.4,
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
        bottom: 70,
        paddingHorizontal: 50,
    },
    footerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontStyle: 'italic',
        fontWeight: '400',
    },
    footerSecond: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'transparent',
        fontStyle: 'italic',
        fontWeight: '400',
        paddingVertical: 20,
    },
});

export default WelcomeScreen;
