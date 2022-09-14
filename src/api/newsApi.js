import api from '.';

const getAllNews = async () => {
  const { data } = await api.get('/news');
  return data;
};

export default getAllNews;
