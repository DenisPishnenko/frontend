import api from '.';

const getUserWithNews = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const checkUser = async () => {
  const { data } = await api.get('/member-data');
  return data;
};

export default getUserWithNews;
