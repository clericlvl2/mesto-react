import React, {useState} from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupWithImage from "../ImagePopup/PopupWithImage";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isConfirmActionPopupOpen, setConfirmActionPopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => setEditAvatarPopupState(true);
  const handleEditProfileClick = () => setEditProfilePopupState(true);
  const handleAddPlaceClick = () => setAddPlacePopupState(true);
  const handleCardClick = card => setSelectedCard(card);
  const closeAllPopups = () => {
    setEditAvatarPopupState(false);
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
    setConfirmActionPopupState(false);
    setSelectedCard({});
  }
  return (
    <>
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
      />

      {/* Edit Avatar Popup */}

      <PopupWithForm name={'edit-avatar'}
                     title={'Обновить аватар'}
                     isOpen={isEditAvatarPopupOpen}
                     isSmall={true}
                     onClose={closeAllPopups}
                     buttonText={'Сохранить'}
      >
        <div className="popup__form-field">
          <input className="popup__form-input popup__form-input_data_user-avatar"
                 type="url"
                 id="user-avatar"
                 name="userAvatar"
                 placeholder="Ссылка на аватар пользователя"
                 required
          />
          <span className="popup__form-error popup__form-error_data_user-avatar"></span>
        </div>
      </PopupWithForm>

      {/* Edit Profile Popup */}

      <PopupWithForm name={'edit-profile'}
                     title={'Редактировать профиль'}
                     isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups}
                     buttonText={'Сохранить'}
      >
        <div className="popup__form-field">
          <input className="popup__form-input popup__form-input_data_name"
                 type="text"
                 id="profile-name"
                 name="userName"
                 placeholder="Имя"
                 minLength="2"
                 maxLength="40"
                 required
          />
          <span className="popup__form-error popup__form-error_data_profile-name"></span>
        </div>
        <div className="popup__form-field">
          <input className="popup__form-input popup__form-input_data_desc"
                 type="text"
                 id="profile-desc"
                 name="userDescription"
                 placeholder="Вид деятельности"
                 minLength="2"
                 maxLength="200"
                 required
          />
          <span className="popup__form-error popup__form-error_data_profile-desc"></span>
        </div>
      </PopupWithForm>

      {/* Add Place Popup */}

      <PopupWithForm name={'add-place'}
                     title={'Новое место'}
                     isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}
                     buttonText={'Создать'}
      >
        <div className="popup__form-field">
          <input className="popup__form-input popup__form-input_data_card-title"
                 type="text"
                 id="card-title"
                 name="cardTitle"
                 placeholder="Название места"
                 minLength="2"
                 maxLength="30"
                 required
          />
          <span className="popup__form-error popup__form-error_data_card-title"></span>
        </div>
        <div className="popup__form-field">
          <input className="popup__form-input popup__form-input_data_card-image"
                 type="url"
                 id="card-image"
                 name="cardImageUrl"
                 placeholder="Ссылка на картинку"
                 required
          />
          <span className="popup__form-error popup__form-error_data_card-image"></span>
        </div>
      </PopupWithForm>

      {/* Confirm Action Popup */}

      <PopupWithForm name={'confirm-action'}
                     title={'Вы уверены?'}
                     isOpen={isConfirmActionPopupOpen}
                     isSmall={true}
                     onClose={closeAllPopups}
                     buttonText={'Да'}
      />

      <PopupWithImage card={selectedCard} onClose={closeAllPopups}/>
      <Footer/>
    </>
  );
}

export default App;
