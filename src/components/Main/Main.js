import React, {useEffect, useState} from "react";
import defaultUserPic from "../../images/userpic-jacques.jpg";
import api from "../../utils/api";
import Card from "../Card/Card";

const Main = (
  {
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick
  }
) => {
  const [userName, setUserName] = useState('Имя...');
  const [userDescription, setUserDescription] = useState('Описание...');
  const [userAvatarLink, setUserAvatarLink] = useState(defaultUserPic);
  const [cardsList, setCardList] = useState([]);
  useEffect(() => {
    api.initializeAppData()
      .then(([userData, cardsList]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatarLink(userData.avatar);
        setCardList(cardsList.reverse());
      })
  },[])
  return (
    <main>
      <section className="profile">
        <div className="profile__image-container">
          <img src={userAvatarLink} alt="Аватар пользователя" className="profile__image"/>
          <button type="button"
                  className="profile__btn-edit-image"
                  onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button"
                  className="profile__btn-edit"
                  onClick={onEditProfile}
          />
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button"
                className="profile__btn-add"
                onClick={onAddPlace}
        />
      </section>
      <section className="gallery" aria-label="Фото-галерея">
        <ul className="gallery__list">
          {
            cardsList.map(card => (
              <Card key={card._id} card={card} onCardClick={onCardClick}/>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;