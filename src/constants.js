import * as Yup from "yup";

export const NEWS_FETCHED_SUCCESSED = "NEWS_FETCHED_SUCCESSED";
export const NEWS_FETCHED_FAILED = "NEWS_FETCHED_FAILED";
export const NEWS_FETCHED_REQUESTED = "NEWS_FETCH_REQUESTED";

export const NEWS_WARNING = "There is no news yet";
export const IS_AUTH_MODAL_OPEN = "IS_AUTH_MODAL_OPEN";
export const TOOGLE_MODAL = "TOOGLE_MODAL";

export const USER_AUTH_REQUESTED = "USER_REGISTER_REQUESTED";
export const USER_REGISTER_SUCCESSED = "USER_REGISTER_SUCCESSED";
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED";

export const USER_LOGIN_SUCCESSED = "USER_LOGIN_SUCCESED";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const USER_LOGOUT_SUCCESSED = "USER_LOGOUT_SUCCESSED";
export const USER_LOGOUT_FAILED = "USER_LOGOUT_FAILED";

export const validateUser = () => {
  return Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter the email"),
    password: Yup.string().required("Please enter the password"),
  });
};

export const FORM_FIELDS = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "text", name: "email" },
  { label: "Password", type: "text", name: "password" },
];
