import { api } from ".";

export const registerUser = async (values) => {
  const { data } = await api.post("/users", { values });
  return data;
};
