import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ConfirmComponent from '../components/ConfirmComponent';
import PopupComponent from '../components/PopupComponent';

import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { app } from '../../firebase/firebase';

const db = getFirestore(app);

interface SubmitProps {
    backgroundColor?: string
    textRed: string
    textTitle: string
    textDic: string
    textInfo: string
    logoSource: any
    titlecolor?: object
    textcolor?: object
    errortext?: object
    star?: object
    onConfirmNavigate?: () => void;
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
    star,
    onConfirmNavigate

}) => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [fullName, setFullName] = useState('');
    const [isFullNameError, setIsFullNameError] = useState<string>('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isPhoneError, setIsPhoneError] = useState<string>('');
    const [isEmailError, setIsEmailError] = useState<string>('');
    const [isValidForm, setIsValidForm] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);



    // Thực hiện quay về màn hình chính
    const onGoHome = () => {
        router.push('/screens/Welcome');
    };
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
        setIsFullNameError('');
    };
    // Kiểm tra trường số điện thoại 
    const handleBlurPhone = () => {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone) && phone.length > 0) {
            setIsPhoneError('Số điện thoại không hợp lệ');
        } else {
            setIsPhoneError('');
        }
    };
    //Kiểm tra trường email
    const handleBlurEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email) && email.length > 0) {
            setIsEmailError('Email không hợp lệ');
        } else {
            setIsEmailError('');
        }
    }
    const handleFocusPhone = () => {
        if (fullName.trim() === '') {
            setIsFullNameError('Vui lòng nhập họ tên');
        }
    }
    // Kiểm tra nếu người focus vào email khi chưa điền thông tin hai trường trên
    const handleFocusEmail = () => {
        if (fullName.trim() === '') {
            setIsFullNameError('Vui lòng nhập họ tên');
        }
        if (phone.trim() === '') {
            setIsPhoneError('Vui lòng nhập số điện thoại');
        }
    };
    // Kiểm tra các trường có rỗng không
    useEffect(() => {
        if (fullName.trim() !== '' && phone.trim() !== '' && checked) {
            if (isPhoneError !== '' || isEmailError !== '') {
                setIsValidForm(false);
            }
            else {
                setIsValidForm(true);
            }
        } else {
            setIsValidForm(false);
        }
    }, [fullName, phone, checked, isPhoneError, isEmailError]);
    //đẩy dữ liệu lên firestore
    const handleConfirm = async () => {
        if (isValidForm) {
            try {
                await addDoc(collection(db, 'users'), {
                    fullName,
                    phone,
                    email,
                });
                console.log("thêm dữ liệu user vào firebase thành công!");
                //chuyển đến màn hình tùy thuộc
                if (onConfirmNavigate) {
                    onConfirmNavigate();
                }
            } catch (error) {
                console.error('Error adding document: ', error);
            }
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={[styles.container, { backgroundColor }]}>
                <Header
                    title="Trang 3/6"
                    showBackButton={true}
                    logo={require('../../assets/images/home_fill.png')}
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
                            />{isFullNameError && <Text style={[styles.errorText, errortext]}>{isFullNameError}</Text>}</View>
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
                                onFocus={handleFocusPhone}
                                onBlur={handleBlurPhone}
                            />
                            {isPhoneError && <Text style={[styles.errorText, errortext]}>{isPhoneError}</Text>}
                        </View>
                        {/* Email */}
                        <View>
                            <Text style={styles.label}>Email:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Nhập email'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholderTextColor="#BABABA"
                                onFocus={handleFocusEmail}
                                onBlur={handleBlurEmail}
                            />
                            {isEmailError && <Text style={[styles.errorText, errortext]}>{isEmailError}</Text>}
                        </View>
                    </View>
                    {/* Điều lệ */}
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity
                            style={[styles.checkbox]}
                            onPress={() => setChecked(!checked)}
                        >
                            {checked && <Image style={styles.checkboxTick} source={require('../../assets/images/check.png')} />}
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
                            onPress={() => handleConfirm()}
                            disabled={!isValidForm}
                            style={[styles.confirmButton, isValidForm ? {} : styles.disabledButton]}
                            textStyle={[styles.confirmText, !isValidForm && styles.disabledText]}
                            onConfirmNavigate={onConfirmNavigate}
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
