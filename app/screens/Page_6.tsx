import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import Header from '../components/Header';
import { useNavigation, useRouter } from 'expo-router';
const Page_6 = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const onGoHome = () => {
        router.push('/screens/Welcome');
    };
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <LinearGradient colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.gradientBackground}>
            <SafeAreaView style={styles.container}>
                {/* Thanh tiêu đề */}
                <Header
                    title="Trang 6/6"
                    showBackButton={true}
                    logo={require('../../assets/images/home_fill.png')}
                    backgroundColor="transparent"
                    onBackPress={handleBack}
                    onGoHome={onGoHome}
                />
                <ScrollView>
                    <View style={styles.overlayContainer}>
                        {/* Logo */}
                        <Image source={require('../../assets/images/logoAnlene.png')} style={styles.logo} />
                        {/* Title */}
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleOne}>THÔNG TIN SẢN PHẨM</Text>
                            <Text style={styles.titleTwo}>SỬA ANLENE 3 KHỎE</Text>
                        </View>
                        {/* Product */}
                        <View style={styles.imageProductContainer}>
                            <Image source={require('../../assets/images/imageProduct_page6.png')}
                                style={styles.imageProduct}
                            />
                        </View>
                        {/* Content */}
                        <View style={styles.contentContainer}>
                            <Text style={styles.content}>Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, tăng cường đề kháng đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ Cơ-Xương-Khớp chắc khoẻ, thoải mái tận hưởng cuộc sống năng động, chẳng ngại
                                “rào cản” tuổi tác.</Text>
                        </View>
                        {/* Card */}
                        <View style={styles.cardContainer}>
                            <LinearGradient
                                colors={['#73A442', '#478449']}
                                style={styles.gradientBorder}>
                                <LinearGradient
                                    colors={['#73A442', '#478449']}
                                    style={styles.card}>
                                    <Image source={require('../../assets/images/cxCoXuong.png')}
                                        style={styles.imageCard}
                                    />
                                </LinearGradient>
                            </LinearGradient>
                            <LinearGradient
                                colors={['#73A442', '#478449']}
                                style={styles.gradientBorder}>
                                <LinearGradient
                                    colors={['#73A442', '#478449']}
                                    style={styles.card}>
                                    <Image source={require('../../assets/images/cxCo.png')}
                                        style={styles.imageCard}
                                    />
                                </LinearGradient>
                            </LinearGradient>
                            <LinearGradient
                                colors={['#73A442', '#478449']}
                                style={styles.gradientBorder}>
                                <LinearGradient
                                    colors={['#73A442', '#478449']}
                                    style={styles.card}>
                                    <Image source={require('../../assets/images/cxKhop.png')}
                                        style={styles.imageCard}
                                    />
                                </LinearGradient>
                            </LinearGradient>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientBackground: {
        flex: 1,
    },
    overlayContainer: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 98,
        height: 26,
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },
    titleOne: {
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center',
        fontWeight: '700',
        color: '#ECD24A',
    },
    titleTwo: {
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        fontWeight: '700',
        color: '#ECD24A',
    },
    imageProductContainer: {
        paddingVertical: 10
    },
    imageProduct: {
        width: 335,
        height: 205,
    },
    contentContainer: {
        paddingHorizontal: 50,
    },
    content: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 400,
        color: '#FFF',
    },
    cardContainer: {
        paddingTop: 10,
        gap: 20,
    },
    gradientBorder: {
        borderRadius: 12,
        padding: 1,
        width: 274,
        height: 168,
    },
    card: {
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: 'yellow',
        flex: 1
    },
    imageCard: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
}
);

export default Page_6;