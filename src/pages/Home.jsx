import { useEffect, useRef, useState } from "react";
import { Button, Header, RestaurantCard } from "../components";
import { getDummyData, getRestaurants } from "../utils/useFetch";
import { sampleCategories } from "../constants";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [limit, setLimit] = useState(8);
  const initRestaurant = useRef(restaurants);

  // filters states
  const [open, setOpen] = useState(true);
  const [price, setPrice] = useState("all");
  const [categories, setCategories] = useState("all");

  // filter by category data samples
  const sample = sampleCategories;

  // Fetch all restaurants data
  useEffect(() => {
    getRestaurants()
      .then((result) => {
        // save all data to ref
        initRestaurant.current = result;
        console.log(result)
        setRestaurants(result);
      })
      .catch((ex) => console.log(ex));

    console.log("SSR 1 get all data");
  }, []);

  // Client Side Rendering for open status & price
  useEffect(() => {
    // filter samples
    const filteredRestaurants = initRestaurant.current.filter((rest) => {
      return (
        ((open === true && rest.currentOpenStatusCategory === "OPEN") ||
          (open === false && rest.currentOpenStatusCategory === null)) &&
        (price === "all" || getPrice(rest.priceTag).includes(price)) &&
        (categories === "all" ||
          rest.establishmentTypeAndCuisineTags.includes(categories))
      );
    });

    // set to current state
    console.log("CSR");
    setRestaurants(filteredRestaurants);
  }, [open, price, setLimit]);

  // Server side Rendering for categories
  useEffect(() => {
    getRestaurants({ establishmentTypeAndCuisineTags: categories })
      .then((result) => {
        const filteredRestaurants = result.filter((rest) => {
          return (
            ((open === true && rest.currentOpenStatusCategory === "OPEN") ||
              (open === false && rest.currentOpenStatusCategory === null)) &&
            (price === "all" || getPrice(rest.priceTag).includes(price)) &&
            (categories === "all" ||
              rest.establishmentTypeAndCuisineTags.includes(categories))
          );
        });

        setRestaurants(filteredRestaurants);
      })
      .catch((ex) => console.log(ex));

    console.log("CSR categories");
  }, [categories]);

  function getPrice(tag) {
    let finalTag = "all";

    switch (tag.split(" - ")[0]) {
      case "$$":
        finalTag = "cheap";
        break;

      case "$$$$":
        finalTag = "expensive";
        break;

      default:
        finalTag = "all";
        break;
    }

    return finalTag;
  }
  return (
    <main className="mx-auto w-[896px]">
      {/* Header */}
      <Header title="Restaurants" />

      {/* filters */}
      <section className="filters__container">
        <span className="flex items-center gap-6">
          <p>Filter by: </p>
          {/* OPEN STATUS FILTER */}
          <div className="flex gap-3 border-b-[1px] border-slate-400 pb-2">
            <input
              type="radio"
              name="openStatus"
              id="openStatus"
              value={open}
              checked={open ? true : false}
              onClick={() => setOpen(!open)}
            />
            <label htmlFor="openStatus">Open Now</label>
          </div>

          {/* PRICE FILTER */}
          <div className="border-b-[1px] border-slate-400 pb-2">
            <select
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.currentTarget.value)}
              className="outline-none w-[100px]"
            >
              <option value="all">All Price</option>
              <option value="cheap">Cheap</option>
              <option value="expensive">Expensive</option>
            </select>
          </div>

          {/* CATEGORIES FILTER */}
          <div className="border-b-[1px] border-slate-400 pb-2">
            <select
              id="categories"
              name="categories"
              value={categories}
              onChange={(e) => setCategories(e.currentTarget.value)}
              className="outline-none w-[150px]"
            >
              {sample.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </span>
        <Button
          text="clear all"
          bgColor="bg-white"
          color="text-accent-blue"
          addClass="border-[1px] border-gray-200"
          clicked={() => {
            setOpen(true);
            setPrice("all");
            setCategories("all");
          }}
        />
      </section>

      {/* cards */}
      <section>
        <h3 className="mb-20">All Restaurants</h3>
        <ul className="flex flex-wrap gap-6">
          {restaurants != null || restaurants != undefined ? (
            restaurants
              .slice(0, limit)
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
        clicked={() => setLimit(limit + 4)}
      />
    </main>
  );
};

export default Home;
