import React from "react";

const Card = ({ card, onCardClick }) => {
  const handleClick = () => onCardClick(card);
  return (
    <li className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__btn-like"/>
          <span className="card__like-indicator">{card.likes.length}</span>
        </div>
      </div>
      <button type="button" className="card__btn-delete"/>
    </li>
  )
}

export default Card;