import api from ".";

export const signOutUser = async () => {
  const { data } = await api.delete("/users/sign_out");
  return data;
};
