import { useEffect, useState } from "react";

import { StarRating } from ".";

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

    response
      .then(
        (succeed) => {
          setIsValidImgUrl(succeed.status === 200);
        },
        (rejected) => {
          setIsValidImgUrl(false);
        }
      )
      .catch((err) => console.log(err));
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
        {/* Detail image */}
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
          <span className="card__modal-rating">
            <h3 className="font-semibold">{name}</h3>
            <StarRating count={averageRating} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus in dolorem illum eaque deserunt eius beatae quam libero laborum?</p>
          </span>
          
        </header>

        {/* Detail Categories */}
        <section className="">
          <header className="card__modal-detail-header">
            <h5>Categories</h5>
          </header>
          <div className="flex gap-4 justify-center">
            {establishmentTypeAndCuisineTags.map((tag) => (
              <p key={tag} className="p-2 font-semibold min-w-[60px]">
                {tag}
              </p>
            ))}
          </div>
        </section>

        {/* Detail reviews */}
        <header className="card__modal-detail-header">
          <h5>Reviews</h5>
        </header>
        <div className="card__modal-review">
          {reviewSnippets &&
            reviewSnippets.reviewSnippetsList.map((review, index) => (
              <figure key={index} className="w-[150px]">
                <figcaption className="w-full flex flex-col justify-between min-h-[220px]">
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
