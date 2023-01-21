import React from "react";

const Card = (props) => {
  const handleClick = () => props.onCardClick(props.card);
  return (
    <li className="card">
      <img src={props.card.link} alt="Фото" className="card__image" onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__btn-like"></button>
          <span className="card__like-indicator">{props.card.likes.length}</span>
        </div>
      </div>
      <button type="button" className="card__btn-delete"></button>
    </li>
  )
}

export default Card;