import React from 'react';

function ImagePopup({card, onClose}) { 
    return (
        // формочка увеличения карточки
        <div className={`popup popup_place_photos` + (card !== null && ' popup_visible')} onClick={onClose}>
            <figure className="figure">
                <img className="popup__image" src={card?.link} alt={card?.name}/>
                <figcaption className="popup__image-subtitle">{card?.name}</figcaption>
                <button className="popup__close-button" id="image-viewer_close-button" type="button" onClick={onClose}></button>
            </figure>
        </div>
    );
}

export default ImagePopup;