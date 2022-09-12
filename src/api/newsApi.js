import api from ".";

export const getAllNews = async () => {
  const { data } = await api.get("/news");
  return data;
};
