import { useEffect, useState } from "react";
import {
  Button,
  RadioFilter,
  DropDownFilter,
  Header,
  RestaurantCard,
} from "../components";
import { getDummyData, useFetch } from "../utils/useFetch";

const Home = () => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    // const url =
    //   "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "0fd4dad000msh0b64d9a2bffa832p174c5bjsn6de351fb3d8c",
    //     "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    //   },
    // };

    // useFetch(url, options)
    //   .then((result) => {
    //     setRestaurants(result);

    //   })
    //   .catch((ex) => console.log(ex));

    setRestaurants(getDummyData);
  }, []);

  

  return (
    <main className="mx-auto w-[896px]">
      {/* Header */}
      <Header title="Restaurants" />

      {/* filters */}
      <section className="border-y-[1px] border-gray-100 flex justify-between gap-3 py-6 mb-20">
        <span className="flex gap-6">
          <p>Filter by: </p>
          <RadioFilter />
          <DropDownFilter />
          <DropDownFilter />
        </span>
        <Button
          text="clear all"
          bgColor="bg-white"
          color="text-accent-blue"
          addClass="border-[1px] border-gray-200"
          clicked={() => {}}
        />
      </section>

      {/* cards */}
      <section>
        <h3 className="mb-6">All Restaurants</h3>
        <ul className="flex flex-wrap gap-6">
          {restaurants != null || restaurants != undefined ? (
            restaurants.map((item) => (
              <RestaurantCard
                key={item.restaurantsId}
                img={item.heroImgUrl}
                title={item.name}
                rating={item.averageRating}
                level={item.priceTag}
                resType={item.establishmentTypeAndCuisineTags[0]}
                isOpen={item.currentOpenStatusCategory}
              />
            ))
          ) : (
            <div>
              <h3>Thank you for your patience...</h3>
            </div>
          )}
        </ul>
      </section>
    </main>
  );
};

export default Home;
