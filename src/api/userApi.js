import api from '.';

export const getUserWithNews = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const checkUser = async () => {
  const { data } = await api.get('/member-data');
  return data;
};
