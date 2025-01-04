import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, ImageSourcePropType, View, Image, ImageStyle } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor: string;
    textColor?: string;
    style?: ViewStyle;
    image?: ImageSourcePropType;
    imageStyle?: ImageStyle; // Thêm imageStyle vào props
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    backgroundColor,
    textColor = '#FFF',
    style,
    image,
    imageStyle, // Nhận imageStyle từ props
}) => {
    return (
        <View>
            <TouchableOpacity
                style={[styles.button, { backgroundColor }, style]}
                onPress={onPress}
            >
                {image && <Image source={image} style={[styles.image, imageStyle]} />}
                <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 90,
        borderRadius: 10.29,
        alignItems: 'center',
        gap: 3.43,
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 16,
    },
    image: {
        width: 34.43,
        height: 34.43,
        backgroundColor: '#FFF',
        borderRadius: 16,
    },
});

export default CustomButton;
