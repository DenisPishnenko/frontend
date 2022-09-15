import api from '.';

const getUserWithNews = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export default getUserWithNews;
