import axios from "axios";

import { BASE_URL } from "../constants";

export const getAllNews = async () => {
  const response = await axios.get(`${BASE_URL}/news`);
  const data = await response.data;
  return data;
};
