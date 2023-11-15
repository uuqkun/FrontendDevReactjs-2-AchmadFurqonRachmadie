import { results } from "./dummyData";

export const useFetch = async (url, options) => {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result.data.data)

  return result.data.data;
};

export function getDummyData() {
  return results.data.data;
}
