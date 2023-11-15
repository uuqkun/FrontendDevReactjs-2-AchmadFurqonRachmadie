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
  const [restaurants, setRestaurants] = useState([]);
  const [limit, setLimit] = useState(8);

  // filters states
  const [open, setOpen] = useState(true);

  useEffect(() => {
    /*
    const url =
      "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0fd4dad000msh0b64d9a2bffa832p174c5bjsn6de351fb3d8c",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };


    useFetch(url, options)
      .then((result) => {
        setRestaurants(result);

      })
      .catch((ex) => console.log(ex));

      */

    setRestaurants(getDummyData);
  }, []);

  const handleLoadMore = () => {
    {
      setLimit(limit + 4);
    }
  };

  const handleClearFilter = () => {
    {
      alert("filter cleared");
    }
  };

  const handleOpenStatus = () => {
    const element = document.getElementById("openStatus");

    setOpen(!open);
  };

  useEffect(() => {
    const tempData = getDummyData();
    const filteredRestaurants = tempData.filter((rest) => {
      return (
        (open === true && rest.currentOpenStatusCategory === "open".toUpperCase()) ||
        (open === false && rest.currentOpenStatusCategory === null)
      );
    });


    setRestaurants(filteredRestaurants);
  }, [open]);

  return (
    <main className="mx-auto w-[896px]">
      {/* Header */}
      <Header title="Restaurants" />

      {/* filters */}
      <section className="filters__container">
        <span className="flex gap-6">
          <p>Filter by: </p>
          {/* <RadioFilter /> */}
          <div>
            <label htmlFor="">Open</label>
            <input
              type="radio"
              name="openStatus"
              id="openStatus"
              value={open}
              checked={open ? true : false}
              onClick={handleOpenStatus}
            />
          </div>
          <DropDownFilter />
          <DropDownFilter />
        </span>
        <Button
          text="clear all"
          bgColor="bg-white"
          color="text-accent-blue"
          addClass="border-[1px] border-gray-200"
          clicked={handleClearFilter}
        />
      </section>

      {/* cards */}
      <section>
        <h3 className="mb-20">All Restaurants</h3>
        <ul className="flex flex-wrap gap-6">
          {restaurants != null || restaurants != undefined ? (
            // restaurants
            restaurants
            //   .slice(0, limit)
              .map((item) => (
                <RestaurantCard key={item.restaurantsId} data={item} />
              ))
          ) : (
            <div>
              <h5 className="font-semibold">Thank you for your patience...</h5>
            </div>
          )}
        </ul>
      </section>

      <Button
        bgColor="bg-white"
        color="text-accent-blue"
        text="load more"
        addClass="border-[2px] border-gray-200 px-8 block mx-auto"
        clicked={handleLoadMore}
      />
    </main>
  );
};

export default Home;
