import { useEffect, useState } from "react";
import { Button, RestaurantDetail, StarRating } from ".";

const RestaurantCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(!isModalOpen);
  };

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
    <article className="mb-10 w-[200px]">
      {/* Restaurant image */}
      <div className="card__image">
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

      {/* Restaurant Details */}
      <div className="card__detail">
        <h5 className="font-medium">{name}</h5>
        <span className="card__detail-rating">
          <StarRating count={averageRating} />
        </span>
        <div className="card__detail-status">
          <p className="text-[10px] uppercase">
            {establishmentTypeAndCuisineTags[0]} · {priceTag}
          </p>
          <div className="card__detail-container">
            <div
              className={`card__detail-dot ${
                currentOpenStatusCategory === "open".toUpperCase()
                  ? "green"
                  : "red"
              }`}
            />
            <p className="text-[10px]">
              {currentOpenStatusCategory === "open".toUpperCase()
                ? "OPEN NOW"
                : "CLOSED"}
            </p>
          </div>
        </div>
      </div>

      {/* Go to details button */}
      <Button addClass="btn-expanded" clicked={handleModalOpen} />

      {/* Modal */}
      <RestaurantDetail isOpen={isModalOpen} closeModal={()=> setIsModalOpen(false)} data={data} />
    </article>
  );
};

export default RestaurantCard;
