import React from "react";
import { Button } from "./";

const FoodCard = ({ img, title, rating, resType, level, isOpen }) => {
  return (
    <article>
      {/* card image */}
      <div className="card__image">
        <img src={img ? img : ""} alt={title} className="w-full h-[170px] bg-gray-100" />
      </div>

      <div className="card__detail">
        <h5 className="font-medium">Lorem ipsum dolor sit.</h5>
        <span className="card__detail-rating">{rating}</span>
        <div className="card__detail-status">
          <p className="text-[10px]">
            {resType} · {level}
          </p>
          {isOpen ? (
            <div className="card__detail-container">
              <span className="card__detail-dot" />
              <p className="text-[10px]">OPEN NOW</p>
            </div>
          ) : (
            <div className="card__detail-container">
              <span className="card__detail-dot" />
              <p>CLOSED</p>
            </div>
          )}
        </div>
      </div>

      <Button />
    </article>
  );
};

export default FoodCard;
