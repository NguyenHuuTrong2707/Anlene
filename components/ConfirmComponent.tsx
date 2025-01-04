import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ConfirmComponentProps {
    title: string;
    onPress: () => void;
    disabled: boolean;
    style?: object;
    textStyle?: object;
}

const ConfirmComponent: React.FC<ConfirmComponentProps> = ({ title, onPress, disabled, style, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.confirmButton, disabled ? styles.disabledButton : {}, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.confirmText, disabled && styles.disabledText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    confirmButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20,
    },
    confirmText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    disabledButton: {
        backgroundColor: '#B8B8B8',
    },
    disabledText: {
        color: '#FFF',
    },
});

export default ConfirmComponent;
