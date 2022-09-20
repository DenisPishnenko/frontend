import * as Yup from 'yup';

export const NEWS_FETCHED_SUCCESSED = 'NEWS_FETCHED_SUCCESSED';
export const NEWS_FETCHED_FAILED = 'NEWS_FETCHED_FAILED';
export const NEWS_FETCHED_REQUESTED = 'NEWS_FETCH_REQUESTED';

export const NEWS_WARNING = 'There is no news yet';
export const OPEN_MODAL = 'IS_AUTH_MODAL_OPEN';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';

export const USER_AUTH_REQUESTED = 'USER_REGISTER_REQUESTED';
export const USER_REGISTER_SUCCESSED = 'USER_REGISTER_SUCCESSED';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';

export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCESSED = 'USER_LOGIN_SUCCESED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESSED = 'USER_LOGOUT_SUCCESED';
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED';

export const USER_REQUESTED = 'USER_REQUESTED';
export const USER_REQUESTED_SUCCESSED = 'USER_REQUESTED_SUCCESED';
export const USER_REQUESTED_FAILED = 'USER_REQUESTED_FAILED';

export const USER_EDIT_REQUESTED = 'USER_EDIT_REQUESTED';
export const USER_EDIT_REQUESTED_SUCCESSED = 'USER_REQUESTED_SUCCESED';
export const USER_EDIT_REQUESTED_FAILED = 'USER_REQUESTED_FAILED';

export const CHECK_USER_REQUESTED = 'CHECK_USER_REQUESTED';
export const CHECK_USER_REQUESTED_SUCCESSED = 'CHECK_USER_REQUESTED_SUCCESED';
export const CHECK_USER_REQUESTED_FAILED = 'CHECK_USER_REQUESTED_FAILED';

export const validateUser = () => Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter the email'),
  password: Yup.string().required('Please enter the password'),
});

export const REGISTER_FIELDS = [
  { label: 'Name', type: 'text', name: 'name' },
  { label: 'Email', type: 'text', name: 'email' },
  { label: 'Password', type: 'text', name: 'password' },
];

export const LOGGED_FIELDS = [
  { label: 'Email', type: 'text', name: 'email' },
  { label: 'Password', type: 'text', name: 'password' },
];
