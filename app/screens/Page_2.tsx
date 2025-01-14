import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { useRouter } from 'expo-router';
import ProgressStep from '../../components/ProgressBar';
import ButtonCheckComponent from '../../components/ButtonCheckComponent';
import ConfirmComponent from '../../components/ConfirmComponent';
import PopupComponent from '../../components/PopupComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
interface Step {
    id: number;
    title: string;
    status: boolean | null;
}

const Page_2 = () => {
    const [steps, setSteps] = useState<Step[]>([
        { id: 1, title: 'Cơ', status: null },
        { id: 2, title: 'Xương', status: null },
        { id: 3, title: 'Khớp', status: null },
        { id: 4, title: 'Đề kháng', status: null },
    ]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [borderStatus, setBorderStatus] = useState<boolean | null>(null);
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const navigation = useNavigation();
    const router = useRouter();
    // Khi quay lại màn hình, reset lại trạng thái của các bước
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSteps([
                { id: 1, title: 'Cơ', status: null },
                { id: 2, title: 'Xương', status: null },
                { id: 3, title: 'Khớp', status: null },
                { id: 4, title: 'Đề kháng', status: null },
            ]);
            setCurrentStep(0);
            setSelectedButton(null);
        });
        // Dọn dẹp khi component bị hủy
        return () => {
            unsubscribe();
        };
    }, [navigation]);
    // Nội dung và hình ảnh tương ứng cho từng bước
    const stepContent = [
        {
            title: 'KIỂM TRA CƠ',
            image: require('../../assets/images/kiemtraco.png'),
            instructions: 'Thẳng lưng trước ghế, đứng lên ngồi xuống 5 lần từ 6-10 giây.',
        },
        {
            title: 'KIỂM TRA XƯƠNG',
            image: require('../../assets/images/kiemtraxuong.png'),
            instructions: 'Duỗi 2 tay về phía trước, từ từ cúi xuống để chạm vào mũi bàn chân',
        },
        {
            title: 'KIỂM TRA KHỚP',
            image: require('../../assets/images/kiemtrakhop.png'),
            instructions: 'Đứng rộng chân, lưng thẳng đứng, tay đưa ra sau và đan vào nhau',
        },
        {
            title: 'KIỂM TRA ĐỀ KHÁNG',
            image: require('../../assets/images/kiemtradekhang.png'),
            instructions: '6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?',
        },
    ];
    //Chuyển màn hình tiếp theo
    //Kiểm tra các step falsefalse
    const stepWarnings: { [key: number]: string } = {
        1: "Cơ",
        2: "Xương",
        3: "Khớp",
        4: "Đề kháng",
    };

    const stepFullWarnings: { [key: number]: string } = {
        1: "Có vẻ bạn đang có đề kháng tốt và hệ vận động tương đối ổn, tuy nhiên bạn cần quan tâm đến hệ cơ hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        2: "Có vẻ bạn đang có đề kháng tốt và hệ vận động tương đối ổn, tuy nhiên bạn cần quan tâm đến hệ xương hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        3: "Có vẻ bạn đang có đề kháng tốt và hệ vận động tương đối ổn, tuy nhiên bạn cần quan tâm đến hệ khớp hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        4: "Có vẻ bạn đang có hệ vận động tốt, tuy nhiên bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
    };
    // Các cảnh báo tùy thuộc vào số lượng và loại bước không đạt
    const dynamicMessages: { [key: string]: string } = {
        "Cơ,Xương": "Có vẻ bạn đang có sức đề kháng tốt nhưng bạn cần quan tâm đến hệ cơ, xương nhiều hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Cơ,Khớp": "Có vẻ bạn đang có sức khỏe xương tốt nhưng cần chú ý đến tình trạng cơ và khớp hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Cơ,Đề kháng": "Tuy rằng bạn đang có hệ vận động tương đối ổn, nhưng bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Cơ,Xương,Khớp": "Có vẻ bạn đang có sức đề kháng tốt nhưng cần quan tâm đến hệ vận động hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Cơ,Khớp,Đề kháng": "Có vẻ bạn đang có vấn đề về vận động và hệ miễn dịch bạn cần chú ý đến sức khỏe hơn nhé hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Cơ,Xương,Đề kháng": "Có vẻ bạn đang có vấn đề về vận động và hệ miễn dịch bạn cần chú ý đến sức khỏe hơn nhé hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Cơ,Xương,Khớp,Đề kháng": "Có vẻ sức khỏe của bạn đang gặp vấn đề, vui lòng chú ý đến sức khỏe hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Xương,Khớp": "Có vẻ bạn đang có sức đề kháng tốt nhưng cần quan tâm đến hệ vận động hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Xương,Đề kháng": "Tuy rằng bạn đang có hệ vận động tương đối ổn, nhưng bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Xương,Khớp,Đề kháng": "Có vẻ bạn đang có vấn đề về vận động và hệ miễn dịch bạn cần chú ý đến sức khỏe hơn nhé hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        "Khớp,Đề kháng": "Tuy rằng bạn đang có hệ vận động tương đối ổn, nhưng bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
    };
    const generateWarningMessage = (warnings: string[]): string => {
        if (warnings.length === 1) {
            // Trả về thông báo đầy đủ nếu chỉ có một bước
            const singleWarning = warnings[0];
            const stepId = Object.keys(stepWarnings).find(key => stepWarnings[+key] === singleWarning);
            return stepFullWarnings[+stepId!];
        }
        const key = warnings.join(",");
        return dynamicMessages[key];
    };
    const goToNext = () => {
        closeModal();

        // Tìm các bước kiểm tra có trạng thái 'false'
        const falseSteps = steps.filter(step => step.status === false);

        // Lấy các cảnh báo cho các bước không đạt
        const warningMessages: string[] = [];
        steps.forEach(step => {
            if (!step.status) {
                warningMessages.push(stepWarnings[step.id]);
            }
        });
    
        // Tạo thông báo kết hợp từ các bước không đạt
        const combinedWarningMessage = generateWarningMessage(warningMessages);
    
        // Hiển thị cảnh báo
        if (combinedWarningMessage) {
            console.log(combinedWarningMessage);
        }




        // Kiểm tra số lượng true/false để điều hướng màn hình
        const falseCount = falseSteps.length;
        const trueCount = steps.filter(step => step.status === true).length;

        if (falseCount > 2) {
            router.push('/screens/SubmitCareful');
        } else if (trueCount === 4) {
            router.push('/screens/SubmitCongra');
        } else if (falseCount >= 1 || falseCount <= 2) {
            router.push('/screens/SubmitImportant');
        }
    };

    // Cập nhật status và border 
    const handleSelect = (isSuccess: boolean, buttonId: number) => {
        setBorderStatus(isSuccess);
        setSelectedButton(buttonId);
        const updatedSteps = [...steps];
        updatedSteps[currentStep].status = isSuccess;
        setSteps(updatedSteps);

        setTimeout(() => {
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        }, 1000);
    };

    useEffect(() => {
        // Khi status cập nhật, thay đổi borderStatus
        if (steps[currentStep].status !== null) {
            setBorderStatus(steps[currentStep].status);
        }
    }, [steps, currentStep]);
    useEffect(() => {
        //reset selectedButton khi mỗi khi chuyển step
        setSelectedButton(null);
    }, [currentStep]);
    const handleBack = () => {
        if (currentStep > 0) {
            const updatedSteps = [...steps];
            updatedSteps[currentStep].status = null;
            setSteps(updatedSteps);
            setTimeout(() => {
                setCurrentStep(currentStep - 1);
            }, 1000);
        } else {
            navigation.goBack();
        }
    };

    const onGoHome = () => {
        router.push('/screens/Welcome');
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);
    // set sự kiện của popup 
    const handleConfirm = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const isLastStep =
        currentStep === steps.length - 1 &&
        steps.every(step => step.status !== null);
    // Đổi title cho step cuối cùng
    const buttonTitleHiem = currentStep === 3 ? 'Hiếm khi' : 'Được';
    const buttonTitleNhieuLan = currentStep === 3 ? 'Nhiều lần' : 'Không được';
    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.gradientBackground}
        >
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <Header
                    title="Trang 2/6"
                    showBackButton={true}
                    logo={require('../../assets/images/home_fill.png')}
                    backgroundColor="transparent"
                    onBackPress={handleBack}
                    onGoHome={onGoHome}
                />
                <View >
                    <Text style={styles.titleHeader}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>
                </View>


                {/* Progress Bar */}
                <View style={styles.progressContainer}>
                    <ProgressStep steps={steps} currentStepIndex={currentStep} />
                </View>


                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>{stepContent[currentStep].title}</Text>

                    {/* Tạo border  */}
                    <View style={[
                        styles.imageContainer,
                        steps[currentStep].status === true ? styles.borderGreen : steps[currentStep].status === false ? styles.borderRed : null
                    ]}>
                        <Image source={stepContent[currentStep].image} style={styles.image} />
                    </View>
                    {/* icon nằm ngoài image*/}
                    {steps[currentStep].status !== null && (
                        <Image
                            source={
                                steps[currentStep].status === true
                                    ? require('../../assets/images/success.png')
                                    : require('../../assets/images/error.png')
                            }
                            style={styles.icon}
                        />
                    )}

                    <Text style={styles.instructions}>{stepContent[currentStep].instructions}</Text>
                    {/* Buttons */}
                    <View style={styles.buttonsContainer}>
                        <ButtonCheckComponent
                            image={require('../../assets/images/duoc.png')}
                            title={buttonTitleHiem}
                            onPress={() => handleSelect(true, 1)}
                            backgroundColor='#71A162'
                            style={{
                                borderColor: selectedButton === 1 ? '#FFC200' : 'transparent',
                                borderWidth: selectedButton === 1 ? 1 : 0,
                            }}
                            imageStyle={{
                                width: selectedButton === 1 ? 41.8 : 34.43,
                                height: selectedButton === 1 ? 41.8 : 34.43,
                                borderRadius: selectedButton === 1 ? 20 : 16,
                            }}

                        />
                        <ButtonCheckComponent
                            image={require('../../assets/images/khongduoc.png')}
                            title={buttonTitleNhieuLan}
                            onPress={() => handleSelect(false, 0)}
                            backgroundColor='#71A162'
                            style={{
                                borderColor: selectedButton === 0 ? '#FFC200' : 'transparent',
                                borderWidth: selectedButton === 0 ? 1 : 0,
                            }}
                            imageStyle={{
                                width: selectedButton === 0 ? 41.8 : 34.43,
                                height: selectedButton === 0 ? 41.8 : 34.43,
                                borderRadius: selectedButton === 0 ? 20 : 16,
                            }}
                        />
                    </View>
                </View>

                {/* Confirm Button */}
                <ConfirmComponent
                    title="XÁC NHẬN"
                    onPress={handleConfirm}
                    disabled={!isLastStep}
                    style={[styles.confirmButton, isLastStep ? {} : styles.disabledButton]}
                    textStyle={[styles.confirmText, !isLastStep && styles.disabledText]}
                />

                {isModalVisible && (
                    <PopupComponent
                        title="CẢM ƠN"
                        cancelButton='Hủy'
                        confirmButton='Tiếp tục'
                        message="Bạn đã tham gia bài kiểm tra sức khoẻ
                            Hãy tiếp tục để có thể nhận kết quả
                              kiểm tra sức khoẻ của bạn."
                        onCancel={closeModal}
                        onConfirm={() => {
                            goToNext();
                        }} visible={true} />
                )}
                {/* Note */}
                <Text style={styles.note}>
                    *Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị trí tập an toàn để không té ngã.
                </Text>
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
        paddingHorizontal: 16,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#E1D770',
        lineHeight: 27,

    },
    titleHeader: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF',
        textAlign: 'center',
    },
    imageContainer: {
        width: 327,
        height: 317,
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 15,
        width: 42,
        height: 42,
        backgroundColor: '#FFF',
        borderRadius: 30,
    },
    borderGreen: {
        borderWidth: 3,
        borderColor: '#4CAF50',
    },
    borderRed: {
        borderWidth: 3,
        borderColor: '#EF5350',
    },
    instructions: {
        fontSize: 15,
        color: '#FFF',
        textAlign: 'center',
        width: 327,
        height: 'auto',
        fontWeight: '500',
        lineHeight: 20.18,
        flexWrap: 'wrap',
        paddingHorizontal: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 16,
        gap: 20.57,
    },
    disabledButton: {
        backgroundColor: '#B8B8B8',
    },
    disabledText: {
        color: '#FFF',
    },
    button: {
        backgroundColor: '#66BB6A',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonFail: {
        backgroundColor: '#EF5350',
    },
    confirmButton: {
        backgroundColor: '#B70002',
        borderRadius: 24,
        alignSelf: 'center',
    },
    confirmText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF',
        lineHeight: 21.92,
    },
    note: {
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 400,
        fontStyle: 'italic',
        lineHeight: 14,
        paddingVertical: 20,
    },
});

export default Page_2;
