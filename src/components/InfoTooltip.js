import React from 'react';
import OK from '../images/Ok.svg';
import NotOK from '../images/Ok_icon.svg';

function InfoTooltip(props) {

    let img = props.isRegisered ? OK : NotOK;

    return (
        <div className={`popup ${props.isOpen && 'popup_visible'}`}>
            <div className="popup__window popup__window-place">
                    <div className="popup__wrapper">
                        <img className="popup__img" src={img} alt=""/>
                        <p className="popup__message">{props.isRegisered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так. \n Попробуйте еще раз'}</p>
                    </div>
                    <button type="button" className="popup__close-button" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default InfoTooltip;