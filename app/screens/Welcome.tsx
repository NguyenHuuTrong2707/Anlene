import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const router = useRouter();

    const goToTest1 = () => {
        router.push('/screens/Test1_6_Co');
    };

    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (

        <SafeAreaView style={styles.container}>
            {/* Thanh tiêu đề */}
            <Header
                title="Trang 1/6"
                showBackButton={false}
                logo={require('../../assets/images/logoAnlene.png')}
                backgroundColor='#2E7D32'
            />
            <View style={styles.titleContainer}>
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
            </View>
            <Image
                source={require('../../assets/images/banner.png')}
                style={styles.imageBanner}
            />

            <TouchableOpacity style={styles.button} onPress={goToTest1}>
                <Text style={styles.buttonText}>KIỂM TRA NGAY</Text>
            </TouchableOpacity>

            <View style={styles.infoBar}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>MIỄN PHÍ</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Chỉ 5 phút</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Voucher 100K</Text>
                </View>
            </View>
            <Text style={styles.footer}>
                Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc
                có bệnh lý về cơ, xương, khớp hoặc tiểu đường
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    titleContainer: {
        padding: 16,
        backgroundColor: '#004d00',
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },
    highlight: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    imageBanner: {
        width: '100%',
        height: 200,
        marginVertical: 16,
    },
    button: {
        backgroundColor: '#FF0000',
        marginHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#004d00',
        paddingVertical: 8,
        marginVertical: 16,
    },
    infoItem: {
        paddingHorizontal: 12,
    },
    infoText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
    },
    footer: {
        color: '#777',
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
    },
});

export default WelcomeScreen;
