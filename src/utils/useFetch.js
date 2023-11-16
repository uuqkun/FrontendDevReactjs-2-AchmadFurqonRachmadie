import { results } from "./dummyData";

export const getRestaurants = async (param = {}) => {
  const response = await fetch(
    "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554",
    {
      method: "GET",
      params: param,
      headers: {
        "X-RapidAPI-Key": "e826fca784mshb499ea3bd0d7e29p1e4423jsn7527df63af59",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    }
  );

  const result = await response.json();

  return result.data.data;
};

export function getDummyData() {
  return results.data.data;
}
