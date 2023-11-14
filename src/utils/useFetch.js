import { data } from "./dummyData";

export const useFetch = async (url) => {
  const response = await fetch(url);
  const result = await response.json();

  return result;
};

export function getDummyData() { 
    return data;
}
