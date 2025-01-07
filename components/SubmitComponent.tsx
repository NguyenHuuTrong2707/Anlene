import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ConfirmComponent from '../components/ConfirmComponent';
import PopupComponent from '../components/PopupComponent';


interface SubmitProps {
    backgroundColor: string
    textRed: string
    textTitle: string
    textDic: string
    textInfo: string
    logoSource: any
    titlecolor?: object
    textcolor?: object
    errortext?: object
    star?: object
}
const SubmitComponent: React.FC<SubmitProps> = ({
    backgroundColor,
    textRed,
    textTitle,
    textDic,
    textInfo,
    logoSource,
    titlecolor,
    textcolor,
    errortext,
    star

}) => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [fullName, setFullName] = useState('');
    const [isFullNameError, setIsFullNameError] = useState(false);
    const [phone, setPhone] = useState('');
    const [isPhoneError, setIsPhoneError] = useState(false);
    const [isValidForm, setIsValidForm] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);



    // Thực hiện quay về màn hình chính
    const onGoHome = () => {
        router.push('/screens/Welcome');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);
    //quay lại màn hình trước
    const handleBack = () => {
        setIsModalVisible(true);

    };
    //đóng model
    const closeModel = () => {
        setIsModalVisible(false);
    }
    const handleConfirmBack = () => {
        closeModel();
        navigation.goBack();
    }
    // Kiểm tra trường họ tên 
    const handleBlurFullName = () => {
        // Kiểm tra nếu trường họ tên trống
        if (fullName.trim() === '') {
            setIsFullNameError(true);
        } else {
            setIsFullNameError(false);
        }
    };
    // Kiểm tra trường số điện thoại 
    const handleBlurPhone = () => {
        // Kiểm tra nếu trường số điện thoại trống 
        if (phone.trim() === '') {
            setIsPhoneError(true);
        } else {
            setIsPhoneError(false);
        }
    };
    // Kiểm tra nếu người focus vào email khi chưa điền thông tin hai trường trên
    const handleFocusEmail = () => {
        if (fullName.trim() === '') {
            setIsFullNameError(true);
        }
        if (phone.trim() === '') {
            setIsPhoneError(true);
        }
    };
    // Kiểm tra các trường có rỗng không
    useEffect(() => {
        if (fullName.trim() !== '' && phone.trim() !== '' && checked) {
            setIsValidForm(true);
        } else {
            setIsValidForm(false);
        }
    }, [fullName, phone, checked]);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={[styles.container, { backgroundColor }]}>
                <Header
                    title="Trang 3/6"
                    showBackButton={true}
                    logo={require('../assets/images/home_fill.png')}
                    backgroundColor="transparent"
                    onBackPress={handleBack}
                    onGoHome={onGoHome}
                />
                <View style={styles.titleContainer}>
                    <Image source={logoSource} style={styles.logo} />
                    <View style={styles.content}>
                        <Text style={[styles.textRed, textcolor]}>{textRed}</Text>
                        <Text style={[styles.textTitle, titlecolor]}>{textTitle}</Text>
                        <Text style={styles.textDic}>{textDic}</Text>
                        <Text style={styles.textInfo}>{textInfo}</Text>
                    </View>
                    {/* Form */}
                    <View style={styles.form}>
                        {/* Họ tên */}
                        <View><Text style={styles.label}>Họ tên:<Text style={star}>*</Text></Text>
                            <TextInput
                                style={[styles.input, isFullNameError && styles.inputError]}
                                placeholder='Nhập họ và tên'
                                placeholderTextColor="#BABABA"
                                value={fullName}
                                onChangeText={(text) => setFullName(text)}
                                onBlur={handleBlurFullName}
                            />{isFullNameError && <Text style={[styles.errorText, errortext]}>Vui lòng nhập họ tên</Text>}</View>
                        {/* Số điện thoại */}
                        <View>
                            <Text style={styles.label}>Số điện thoại:<Text style={star}>*</Text></Text>
                            <TextInput
                                style={[styles.input, isPhoneError && styles.inputError]}
                                placeholder='Nhập số điện thoại'
                                keyboardType='phone-pad'
                                placeholderTextColor="#BABABA"
                                value={phone}
                                onChangeText={(text) => setPhone(text)}
                                onBlur={handleBlurPhone}
                            />
                            {isPhoneError && <Text style={[styles.errorText, errortext]}>Vui lòng nhập số điện thoại</Text>}
                        </View>
                        {/* Email */}
                        <View>
                            <Text style={styles.label}>Email:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Nhập email'
                                keyboardType='email-address'
                                placeholderTextColor="#BABABA"
                                onFocus={handleFocusEmail}
                            />
                        </View>
                    </View>
                    {/* Điều lệ */}
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity
                            style={[styles.checkbox]}
                            onPress={() => setChecked(!checked)}
                        >
                            {checked && <Image style={styles.checkboxTick} source={require('../assets/images/check.png')} />}
                        </TouchableOpacity>
                        <Text style={styles.checkboxLabel}>Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng cáo sản phẩm hay khuyến mãi nào </Text>
                    </View>
                    {/* Note */}
                    <View style={styles.note}>
                        <Text style={styles.textNote}>Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin của mình để xử lý dựa trên chính sách bảo mật của Anlene </Text>
                    </View>

                    {/* Button Hoàn thành */}
                    <View style={styles.button}>
                        <ConfirmComponent
                            title="HOÀN THÀNH"
                            onPress={() => { }}
                            disabled={!isValidForm}
                            style={[styles.confirmButton, isValidForm ? {} : styles.disabledButton]}
                            textStyle={[styles.confirmText, !isValidForm && styles.disabledText]}
                        />
                    </View>
                    {isModalVisible && (
                        <PopupComponent
                            title="THÔNG BÁO!"
                            cancelButton='Hủy'
                            confirmButton='Đồng ý'
                            message="Bạn có muốn huỷ bỏ kết quả
                                         kiểm tra sức khoẻ trước đó không?"
                            onCancel={closeModel}
                            onConfirm={handleConfirmBack}
                            visible={true}
                        />
                    )}
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#969696',
    },
    gradientContainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 26,
    },
    logo: {
        width: 117,
        height: 31,
    },
    content: {
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    textRed: {
        color: '#DF1E13',
        fontSize: 13,
        fontWeight: '700',
        lineHeight: 18,
        textAlign: 'center',
    },
    textTitle: {
        color: '#DF1E13',
        fontSize: 26,
        fontWeight: '700',
        lineHeight: 35,
        textAlign: 'center',
    },
    textDic: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        textAlign: 'center',
    },
    textInfo: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 21,
        textAlign: 'center',
    },
    form: {
        paddingVertical: 10,
        flexDirection: 'column',
        gap: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
        color: '#FFF',
    },
    input: {
        width: 327,
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 14,
        backgroundColor: '#FFF',
        fontWeight: '500',
    },
    checkboxContainer: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: 10,
        gap: 5,
    },
    checkboxTick: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 2,
        left: 2,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        backgroundColor: '#FFF',
    },

    checkboxLabel: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 16,
    },
    note: {
        paddingHorizontal: 10,
    },
    textNote: {
        fontSize: 11,
        lineHeight: 16,
        fontWeight: '400',
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFF',
    },
    inputError: {
        borderColor: '#ECD24A',
        borderWidth: 2,
    },
    errorText: {
        color: '#ECD24A',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'left',
    },
    confirmButton: {
        backgroundColor: '#B70002',
        borderRadius: 24,
        alignSelf: 'center',
        marginBottom: 10,
    },
    confirmText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF',
        lineHeight: 21.92,
    },
    disabledButton: {
        backgroundColor: '#B8B8B8',
    },
    disabledText: {
        color: '#FFF',
    },
    button: {
        paddingVertical: 20,
    },
});

export default SubmitComponent;
