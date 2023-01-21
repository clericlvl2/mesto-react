import React from "react";

const ImagePopup = (props) => {
  const openedPopupStyle = (props.card._id) ? 'popup_opened' : '';
  return (
    <section className={`popup popup_type_zoom-image_zoom ${openedPopupStyle}`} aria-label="Фото. Увеличение">
      <div className="popup__image-container">
        <img src={props.card.link} alt="Фото" className="popup__image"/>
        <p className="popup__image-subtitle">{props.card.name}</p>
        <button type="button" className="popup__btn-exit" onClick={props.onClose}></button>
      </div>
    </section>
  )
}

export default ImagePopup;