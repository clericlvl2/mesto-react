import React from "react";

const PopupWithForm = (props) => {
  const styles = {
    openedPopup: (props.isOpen) ? 'popup_opened' : '',
    smallContainer: (props.isSmall) ? 'popup__container_size_small' : '',
    smallTitle: (props.isSmall) ? 'popup__title_size_small' : ''
  }
  return (
    <section className={`popup popup_type_${props.name} ${styles.openedPopup}`}>
      <div className={`popup__container ${styles.smallContainer}`}>
        <h3 className={`popup__title ${styles.smallTitle}`}>{props.title}</h3>
        <form className={`popup__form popup__form_type_${props.name}`}
              name={`form_type_${props.name}`}
        >
          {props.children}
        </form>
        <button type="button" className="popup__btn-exit" onClick={props.onClose}>
        </button>
      </div>
    </section>
  )
}

export default PopupWithForm;