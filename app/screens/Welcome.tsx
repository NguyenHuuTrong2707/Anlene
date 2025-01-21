import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import { app } from '../../firebase/firebase';
interface PageData {
    title1: string;
    title2: string;
    title3: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    content: string;
    footer1: string;
    footer2: string;
}
const db = getFirestore(app);
const WelcomeScreen = () => {
    const router = useRouter();
    const [pageData, setPageData] = useState<PageData | null>(null);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, " Page_1"), (querySnapshot) => {
            if (querySnapshot.empty) {
                console.log("No documents found in 'Page_1' collection.");
                return;
            }

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                setPageData({
                    title1: data.title1,
                    title2: data.title2,
                    title3: data.title3,
                    img1: data.img1,
                    img2: data.img2,
                    img3: data.img3,
                    img4: data.img4,
                    content: data.content,
                    footer1: data.footer1,
                    footer2: data.footer2,
                });
            });
        },
            (error) => {
                console.log("Error fetching document:", error);
            });
        return () => unsubscribe();
    }, []);

    const goToTest1 = () => {
        router.push('/screens/Page_2');
    };



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
                    <Image source={{ uri: pageData?.img1 }} style={styles.imageBanner} />
                    {/* Title and Subtitle */}
                    <LinearGradient
                        colors={['#13500E', '#1F660D', '#20680DE5', '#236E0DD9', '#27750DB2', '#2E820D00']}
                        style={styles.titleContainer}
                    >
                        <Text style={styles.title}
                        >
                            {pageData?.title1}  {'\n'}{pageData?.title2}{'\n'}{pageData?.title3}
                        </Text>


                        <Text style={styles.subtitle}>
                            {pageData?.content}
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
                                <Image source={{ uri: pageData?.img2 }} style={styles.infoItem} />
                                <Image source={{ uri: pageData?.img4 }} style={styles.infoItem} />
                                <Image source={{ uri: pageData?.img3 }} style={styles.infoItem} />

                            </View>
                            {/* Footer */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.footer}>
                                    {pageData?.footer1}
                                </Text>
                                <Text style={styles.footerSecond}>
                                    {pageData?.footer2}
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
    overlayContainer: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inforContainerGradient: {
        flex: 1,
        position: 'absolute',
        bottom: -20,
        left: 0,
        right: 0,
        height: '30%',
    },
    inforContainer: {
        flex: 1,
        justifyContent: 'flex-end',
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
        height: 46,
        justifyContent: 'center',
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
        width: 86,
        height: 57,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 60,
        paddingHorizontal: 50,
    },
    footerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: 150,
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
    },
});

export default WelcomeScreen;
