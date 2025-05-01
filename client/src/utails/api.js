import axios from "axios";

const config = {
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      config
    );
    return data;
  } catch (error) {
    console.error(
      "ERROR OCCURRED WHILE FETCHING DATA: ",
      error.response?.data || error.message
    );
    return error;
  }
};
