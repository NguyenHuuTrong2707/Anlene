import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import Header from '../components/Header';
import { useNavigation, useRouter } from 'expo-router';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import { app } from '../../firebase/firebase';
interface PageData {
    title: string
    imgProduct: string
    imgCo: string
    imgXuong: string
    imgKhop: string
    content: string
   
}
const db = getFirestore(app)
const Page_6: React.FC = () => {
    //lay du lieu tu firebase 
    const [pageData, setPageData] = useState<PageData | null>(null);
        useEffect(() => {
            const unsubscribe = onSnapshot(collection(db, "Page_6"), (querySnapshot) => {
                if (querySnapshot.empty) {
                    console.log("No documents found in 'Page_6' collection.");
                    return;
                }
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    setPageData({
                        title: data.title,
                        imgProduct: data.imgProduct,
                        imgCo: data.imgCo,
                        imgXuong: data.imgXuong,
                        imgKhop: data.imgKhop,
                        content: data.content
                    });
                });
            },
                (error) => {
                    console.log("Error fetching document:", error);
                });
            return () => unsubscribe();
        }, []);
    const navigation = useNavigation();
    const handleBack: () => void = () => {
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
                />
                <ScrollView>
                    <View style={styles.overlayContainer}>
                        {/* Logo */}
                        <Image source={require('../../assets/images/logoAnlene.png')} style={styles.logo} />
                        {/* Title */}
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleOne}>THÔNG TIN SẢN PHẨM</Text>
                            <Text style={styles.titleTwo}>{pageData?.title}</Text>
                        </View>
                        {/* Product */}
                        <View style={styles.imageProductContainer}>
                            <Image source={{uri : pageData?.imgProduct}}
                                style={styles.imageProduct}
                            />
                        </View>
                        {/* Content */}
                        <View style={styles.contentContainer}>
                            <Text style={styles.content}>{pageData?.content}</Text>
                        </View>
                        {/* Card */}
                        <View style={styles.cardContainer}>
                            <LinearGradient
                                colors={['#73A442', '#478449']}
                                style={styles.gradientBorder}>
                                <LinearGradient
                                    colors={['#73A442', '#478449']}
                                    style={styles.card}>
                                    <Image source={{uri : pageData?.imgXuong}}
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
                                    <Image source={{uri : pageData?.imgCo}}
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
                                    <Image source={{uri : pageData?.imgKhop}}
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