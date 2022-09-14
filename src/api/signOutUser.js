import api from '.';

const signOutUser = async () => {
  const { data } = await api.delete('/users/sign_out');
  return data;
};

export default signOutUser;
