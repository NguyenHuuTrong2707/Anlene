import React from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import ConfirmComponent from '../components/ConfirmComponent';

interface PopupComponentProps {
    visible: boolean;
    title: string;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
}

const PopupComponent: React.FC<PopupComponentProps> = ({
    visible,
    title,
    message,
    onCancel,
    onConfirm,
}) => {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <TouchableWithoutFeedback onPress={onCancel}>
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <View style={styles.popup}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        <ConfirmComponent
                            title="Hủy"
                            onPress={onCancel}
                            style={[styles.button, styles.cancelButton]}
                            textStyle={styles.cancelText}
                            disabled={false}
                        />
                        <ConfirmComponent
                            title="Xác nhận"
                            onPress={onConfirm}
                            style={[styles.button, styles.confirmButton]}
                            textStyle={styles.confirmText}
                            disabled={false}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
    popup: {
        backgroundColor: '#FFF',
        borderRadius: 14,
        width: 336,
        height: 194,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 36,
        paddingVertical: 10,
        color: '#478449',
    },
    message: {
        fontSize: 14,
        color: '#1D1C1C',
        textAlign: 'center',
        lineHeight: 18.83,
        fontWeight: '500',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    button: {
        flex: 1,
    },
    cancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 24,
        borderWidth: 1.5,
        borderColor: '#B70002',
    },
    confirmButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B70002',
        borderRadius: 24,
    },
    cancelText: {
        color: '#B70002',
        fontWeight: '700',
        textAlign: 'center',
    },
    confirmText: {
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default PopupComponent;
