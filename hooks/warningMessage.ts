interface StepWarning {
    message: string;
    url: string;
}

const stepWarnings: { [key: number]: string } = {
    1: "Cơ",
    2: "Xương",
    3: "Khớp",
    4: "Đề kháng",
};

const stepFullWarnings: { [key: string]: StepWarning } = {
    1: {
        message: "Có vẻ bạn đang có đề kháng tốt và hệ vận động tương đối ổn, tuy nhiên bạn cần quan tâm đến hệ cơ hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: 'https://bit.ly/4jokIXd'
    },
    2: {
        message: "Có vẻ bạn đang có đề kháng tốt và hệ vận động tương đối ổn, tuy nhiên bạn cần quan tâm đến hệ xương hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    3: {
        message: "Có vẻ bạn đang có đề kháng tốt và hệ vận động tương đối ổn, tuy nhiên bạn cần quan tâm đến hệ khớp hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    4: {
        message: "Có vẻ bạn đang có hệ vận động tốt, tuy nhiên bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
};

const dynamicMessages: { [key: string]: StepWarning } = {
    "Cơ,Xương": {
        message: "Có vẻ bạn đang có sức đề kháng tốt nhưng bạn cần quan tâm đến hệ cơ, xương nhiều hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: 'https://bit.ly/4jokIXd'
    },
    "Cơ,Khớp": {
        message: "Có vẻ bạn đang có sức khỏe xương tốt nhưng cần chú ý đến tình trạng cơ và khớp hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    "Cơ,Đề kháng": {
        message: "Tuy rằng bạn đang có hệ vận động tương đối ổn, nhưng bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    "Cơ,Xương,Khớp": {
        message: "Có vẻ bạn đang có sức đề kháng tốt nhưng cần quan tâm đến hệ vận động hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: 'https://bit.ly/4hi26X5'
    },
    "Cơ,Khớp,Đề kháng": {
        message: "Có vẻ bạn đang có vấn đề về vận động và hệ miễn dịch bạn cần chú ý đến sức khỏe hơn nhé hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    "Cơ,Xương,Đề kháng": {
        message: "Có vẻ bạn đang có vấn đề về vận động và hệ miễn dịch bạn cần chú ý đến sức khỏe hơn nhé hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    "Cơ,Xương,Khớp,Đề kháng": {
        message: "Có vẻ sức khỏe của bạn đang gặp vấn đề, vui lòng chú ý đến sức khỏe hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    "Xương,Khớp": {
        message: "Có vẻ bạn đang có sức đề kháng tốt nhưng cần quan tâm đến hệ vận động hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    "Xương,Đề kháng": {
        message: "Tuy rằng bạn đang có hệ vận động tương đối ổn, nhưng bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
    "Xương,Khớp,Đề kháng": {
        message: "Có vẻ bạn đang có vấn đề về vận động và hệ miễn dịch bạn cần chú ý đến sức khỏe hơn nhé hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ""
    },
    "Khớp,Đề kháng": {
        message: "Tuy rằng bạn đang có hệ vận động tương đối ổn, nhưng bạn cần quan tâm đến sức đề kháng hơn nhé, bởi vì sau 40 tuổi, sức khỏe Cơ-Xương-Khớp có thể bị suy giảm",
        url: ''
    },
};

export const generateWarningMessage = (warnings: string[]): StepWarning => {
    if (warnings.length === 1) {
        const singleWarning = warnings[0];
        const stepId = Object.keys(stepWarnings).find(key => stepWarnings[+key] === singleWarning);
        if (stepId) {
            return {
                message: stepFullWarnings[+stepId].message,
                url: stepFullWarnings[+stepId].url,
            };
        }
    }
    const key = warnings.join(",");
    return dynamicMessages[key] || {
        message: "Thông tin không xác định",
        url: '',
    };
};
export {stepWarnings}