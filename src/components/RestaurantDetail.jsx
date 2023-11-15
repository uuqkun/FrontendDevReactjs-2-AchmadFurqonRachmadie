import { useEffect, useState } from "react";

import { Star, StarRating } from ".";

function RestaurantDetail({ isOpen, closeModal, data }) {
  const [isValidImgUrl, setIsValidImgUrl] = useState(true);

  const {
    heroImgUrl,
    name,
    averageRating,
    priceTag,
    establishmentTypeAndCuisineTags,
    currentOpenStatusCategory,
    reviewSnippets,
    menuUrl,
  } = data;

  useEffect(() => {
    // Image url checking
    const response = fetch(heroImgUrl);

    response.then(
      (succeed) => {
        setIsValidImgUrl(succeed.status === 200);
      },
      (rejected) => {
        setIsValidImgUrl(false);
      }
    )
    .catch(err => console.log(err));
  }, [heroImgUrl]);

  const generateReview = () => {
    return Math.floor(Math.random() * (5 - 3) + 4);
  };

  return (
    <div>
      {isOpen && <div className="bg-area" />}
      <dialog
        id="modal"
        className={`card__modal ${isOpen ? "block" : "hidden"}`}
      >
        <div className="card__modal-head mb-6">
          <div className="card__image mb-4">
            {isValidImgUrl ? (
              <img
                src={heroImgUrl}
                alt={name}
                className="w-full h-[250px] bg-gray-100 object-cover"
              />
            ) : (
              <img
                src={
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ce/47/18/under-the-banyan-tree.jpg?w=100&h=100&s=1"
                }
                alt={name}
                className="w-full h-[250px] bg-gray-100 object-cover"
              />
            )}
          </div>
        </div>

        {/* Detail header */}
        <header className="card__modal-header">
          <>
            <span className="card__modal-rating">
              <h3 className="font-semibold">{name}</h3>
              <StarRating count={averageRating} />
            </span>
          </>
          <button>
            <a
              href={menuUrl}
              className="btn-base bg-red-200 rounded-md text-red-700 font-medium"
            >
              Menu
            </a>
          </button>
        </header>

        {/* reviews */}
        <header className="card__modal-review-header">
          <h5>Reviews  · </h5>{Star}
        </header>
        <div className="card__modal-review">
          {reviewSnippets &&
            reviewSnippets.reviewSnippetsList.map((review, index) => (
              <figure key={index} className="w-[150px]">
                <figcaption className="w-full">
                  <div className="profile__wrapper mx-auto">
                    <img
                      src="https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1"
                      alt={`${name} review`}
                      className="w-[60px] object-cover"
                    />
                  </div>

                  <p className="text-center my-4">
                    <em>
                      “{review.reviewText.substring(0, 50)}...” <br />{" "}
                    </em>{" "}
                  </p>
                  <p className="text-center mb-4">
                    <b> Jhon · {generateReview()}/5</b>
                  </p>
                  <button className="btn-base bg-slate-200 rounded-md text-accent-blue font-medium block mx-auto">
                    <a href={review.reviewUrl} target="_blank">
                      See more -&gt;
                    </a>
                  </button>
                </figcaption>
              </figure>
            ))}
        </div>
        <button className="btn-base exit-modal" onClick={closeModal}>
          X
        </button>
      </dialog>
    </div>
  );
}

export default RestaurantDetail;
