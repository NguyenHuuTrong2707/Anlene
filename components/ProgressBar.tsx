import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ProgressStepProps {
    steps: { id: number; title: string; status: boolean | null }[]; // Mảng các bước với trạng thái
    currentStepIndex: number; // Chỉ số của bước hiện tại
}

const ProgressStep: React.FC<ProgressStepProps> = ({ steps, currentStepIndex }) => {
    return (
        <View style={styles.progressBarContainer}>
            {/* Phần nền có độ mờ */}
            <View style={styles.backgroundOverlay} />

            {steps.map((step, index) => (
                <View key={step.id} style={styles.stepWrapper}>
                    {/* Vòng tròn chỉ bước */}
                    <View
                        style={[
                            styles.stepIndicator,
                        ]}
                    >
                        {index === currentStepIndex && step.status === null ? ( // trạng thái chờ
                            <Image source={require('../assets/images/pending.png')} style={[styles.stepImage]} />
                        ) : step.status === true ? (
                            <Image source={require('../assets/images/success.png')} style={styles.stepImage} />
                        ) :
                            step.status === false ? (
                                <Image source={require('../assets/images/error.png')} style={styles.stepImage} />
                            ) : (
                                <Text style={styles.stepIndicatorText}>{step.id}</Text> // Số bước
                            )}
                    </View>
                    {/* Tiêu đề dưới mỗi bước */}
                    <Text style={styles.stepTitle}>{step.title}</Text>

                    {/* Nối giữa các bước */}
                    {index < steps.length - 1 && (
                        <View
                            style={[
                                styles.connector,
                                currentStepIndex > index ? styles.completedConnector : styles.pendingConnector,
                            ]}
                        />
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 327,
        height: 72,
        position: 'relative',
    },
    backgroundOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFF',
        opacity: 0.15,
        borderRadius: 12,
    },
    stepWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: 14,
    },
    stepIndicator: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    stepImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        resizeMode: 'contain',
        backgroundColor: '#FFF',
    },
    stepIndicatorText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    connector: {
        width: 50,
        height: 2,
        position: 'absolute',
        top: 15,
        zIndex: -1,
    },
    completedConnector: {
        backgroundColor: '#66BB6A',
    },
    pendingConnector: {
        backgroundColor: '#BDBDBD',
    },
    stepTitle: {
        fontSize: 12,
        color: '#FFF',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '500',
    },

});

export default ProgressStep;
