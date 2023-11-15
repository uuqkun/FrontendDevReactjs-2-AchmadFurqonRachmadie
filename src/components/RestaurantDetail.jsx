import { useEffect, useState } from "react";

import { StarRating } from ".";

const RestaurantDetail = ({ isOpen, closeModal, data }) => {
  const [isValidImgUrl, setIsValidImgUrl] = useState(true);
  const {
    heroImgUrl,
    name,
    averageRating,
    priceTag,
    establishmentTypeAndCuisineTags,
    currentOpenStatusCategory,
    reviewSnippets,
  } = data;

  useEffect(() => {
    const modal = document.getElementById("modal");
  }, []);

  useEffect(() => {
    // Image url checking
    const response = fetch(heroImgUrl);

    response.then(
      (succeed) => {
        console.log(succeed.status);
        setIsValidImgUrl(succeed.status === 200);
      },
      (rejected) => {
        console.log(rejected);
        setIsValidImgUrl(false);
      }
    );
  }, [heroImgUrl]);

  return (
    <dialog id="modal" className={`card__modal ${isOpen ? "block" : "hidden"}`}>
      <div className="card__modal-head mb-10">
        <div className="card__image mb-4">
          {isValidImgUrl ? (
            <img
              src={heroImgUrl}
              alt={name}
              className="w-full h-[170px] bg-gray-100"
            />
          ) : (
            <img
              src={
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ce/47/18/under-the-banyan-tree.jpg?w=100&h=100&s=1"
              }
              alt={name}
              className="w-full h-[170px] bg-gray-100"
            />
          )}
        </div>
        <h3>{name}</h3>
        <span className="card__modal-rating">
          <StarRating count={averageRating} />
        </span>
      </div>

      <div className="card__modal-review">
        {reviewSnippets &&
          reviewSnippets.reviewSnippetsList.map((review, index) => (
            <figure key={index}>
              <figcaption>
                <div className="profile__wrapper">
                  <img
                    src="https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1"
                    alt={`${name} review`}
                    className="w-[60px] object-cover"
                  />
                </div>
                “<em>{review.reviewText}</em>”<b>- Jhon -</b>
              </figcaption>
            </figure>
          ))}
      </div>
      <button className="btn-base" onClick={closeModal}>
        close
      </button>
    </dialog>
  );
};

export default RestaurantDetail;
