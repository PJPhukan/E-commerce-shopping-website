import { useEffect, useState } from "react";
import { fetchData } from "../utails/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  const fetchDataFromApi = async () => {
    const response = await fetchData(endpoint);
    setData(response);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [endpoint]);

  return { data };
};

export default useFetch;
