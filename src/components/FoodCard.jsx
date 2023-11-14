import React from "react";

import { Button, StarRating } from "./";
import ratingStar from "../assets/star.svg";

const FoodCard = ({ img, title, rating, resType, level, isOpen }) => {
  return (
    <article className="mb-10 w-[200px]">
      {/* Restaurant image */}
      <div className="card__image">
        <img
          src={img ? img : ""}
          alt={title}
          className="w-full h-[170px] bg-gray-100"
        />
      </div>

      {/* Restaurant Details */}
      <div className="card__detail">
        <h5 className="font-medium">Lorem ipsum dolor sit.</h5>
        <span className="card__detail-rating">
          <StarRating />
        </span>
        <div className="card__detail-status">
          <p className="text-[10px]">
            {resType} · {level}
          </p>
          <div className="card__detail-container">
            <div className={`card__detail-dot ${isOpen ? "green" : "red"}`} />
            <p className="text-[10px]">{isOpen ? "OPEN NOW" : "CLOSED"}</p>
          </div>
        </div>
      </div>

      {/* Go to details button */}
      <Button addClass="btn-expanded" clicked={() => {}} />
    </article>
  );
};

export default FoodCard;
