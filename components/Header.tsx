import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderProps {
    title: string;
    onBackPress?: () => void;
    showBackButton?: boolean;
    logo?: any;
    iconStyle?: object;
    backgroundColor?: string; // Thêm thuộc tính màu nền
    onGoHome?: () => void;

}

const Header: React.FC<HeaderProps> = ({
    title,
    onBackPress,
    showBackButton = true,
    logo,
    iconStyle,
    backgroundColor = '#004d00',
    onGoHome,
}) => {
    return (
        <View style={[styles.header, { backgroundColor }]}>
            {/* Nút back hoặc placeholder */}
            {showBackButton ? (
                <TouchableOpacity onPress={onBackPress}>
                    <Image
                        source={require('../assets/images/vector_left.png')}
                        style={[styles.icon, iconStyle]}
                    />
                </TouchableOpacity>
            ) : (
                <View style={styles.placeholder} />
            )}

            <View style={styles.titleContainer}>
                <Image
                    source={require('../assets/images/vector_left.png')} // Chèn vector bên trái
                    style={styles.vector}
                />
                <Text style={styles.title}>{title}</Text>
                <Image
                    source={require('../assets/images/vector_right.png')} // Chèn vector bên phải
                    style={styles.vector}
                />
            </View>

            {/* Logo hoặc placeholder */}
            {logo ? (
                <TouchableOpacity onPress={onGoHome}>
                    <Image source={logo}
                        style={styles.icon} />
                </TouchableOpacity>
            ) : (
                <View style={styles.placeholder} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,

    },
    icon: {
        width: 60,
        height: 32,
        resizeMode: 'contain',
    },
    placeholder: {
        width: 50,
        height: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',

    },
    vector: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
});

export default Header;
