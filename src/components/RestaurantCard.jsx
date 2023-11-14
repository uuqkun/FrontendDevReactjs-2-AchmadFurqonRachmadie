import { useState } from "react";
import { Button, StarRating } from ".";

const RestaurantCard = ({ img, title, rating, resType, level, isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    const modal = document.getElementById("modal");
    setIsModalOpen(!isModalOpen);
    
    modal.showModal();
  };
  
  const handleModalClose = () => {
    const modal = document.getElementById("modal");
    setIsModalOpen(!isModalOpen);
    
    modal.close();
  };
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
        <h5 className="font-medium">{title}</h5>
        <span className="card__detail-rating">
          <StarRating count={rating} />
        </span>
        <div className="card__detail-status">
          <p className="text-[10px] uppercase">
            {resType} · {level}
          </p>
          <div className="card__detail-container">
            <div
              className={`card__detail-dot ${
                isOpen === "open".toUpperCase() ? "green" : "red"
              }`}
            />
            <p className="text-[10px]">
              {isOpen === "open".toUpperCase() ? "OPEN NOW" : "CLOSED"}
            </p>
          </div>
        </div>
      </div>

      {/* Go to details button */}
      <Button addClass="btn-expanded" clicked={handleModalOpen} />

      <dialog id="modal">
              <h1>{title}</h1>
              <button className="btn-base" onClick={handleModalClose}>close</button>
      </dialog>
    </article>
  );
};

export default RestaurantCard;
