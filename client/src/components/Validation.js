import React from 'react';


export const validate = (value, rules) => {
    if (rules.required && value.trim() === '') {
        return '필수 입력 사항입니다.';
    }
    
    if (rules.email && !value.includes('@') && !value.includes('.')) {
        return '유효하지 않은 이메일입니다.';
    }
    
    if (rules.password && (!/\d/.test(value) || !/[a-zA-Z]/.test(value))) {
        return '비밀번호는 영문과 숫자가 반드시 포함되어야 합니다.';
    }

    if (rules.nickname && (!/^[a-zA-Z]/.test(value))) {
        return '닉네임은 반드시 영문으로 시작해야합니다.';
    }

    return '';
};

const Validation = ({ value, rules }) => {
    const validationMessage = validate(value, rules);

    return (
        <p className="warningmsg" style={{ color: 'red', fontSize: '16px' }}>{validationMessage}</p>
    );
};

export default Validation;
