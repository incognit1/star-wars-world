import React from 'react'

import './error-message.css'
import errorImage from './boom.png'


const ErrorMessage = () => {
    return (
        <div className="error-container">
            <img src={errorImage} alt="error icon"/>
            <p className="error-title">Ошибка</p>
            <p className="error-msg">Произошла ошибка во время загрузки содержимого для этого блока (мы уже выслали дроидов чтобы исправить это).</p>
        </div>
    )
};

export default ErrorMessage;
