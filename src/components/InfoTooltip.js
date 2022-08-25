import React from 'react';
import OK from '../images/ok.svg';
import NotOK from '../images/ok_icon.svg';

function InfoTooltip(props) {

    const img = props.isRegisered ? OK : NotOK;

    return (
        <div className={`popup ${props.isOpen && 'popup_visible'}`}>
            <div className="popup__window popup__window-place">
                <div className="popup__wrapper">
                    <img className="popup__img" src={img} alt={props.name} />
                    <p className="popup__message">{props.isRegisered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так. \n Попробуйте еще раз'}</p>
                </div>
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default InfoTooltip;