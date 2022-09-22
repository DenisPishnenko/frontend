import {
  USER_REQUESTED, USER_REQUESTED_FAILED,
  USER_REQUESTED_SUCCESSED,
  USER_EDIT_REQUESTED,
  USER_EDIT_REQUESTED_SUCCESSED,
  USER_EDIT_REQUESTED_FAILED,
  CHECK_USER_REQUESTED,
  CHECK_USER_REQUESTED_SUCCESSED,
  CHECK_USER_REQUESTED_FAILED,
} from '../../constants';

export const fetchUser = (payload) => ({
  type: USER_REQUESTED,
  payload,
});

export const fetchUserSuccessed = (payload) => ({
  type: USER_REQUESTED_SUCCESSED,
  payload,
});

export const fetchUserFailed = (payload) => ({
  type: USER_REQUESTED_FAILED,
  payload,
});

export const fetchUserEdited = (payload) => ({
  type: USER_EDIT_REQUESTED,
  payload,
});

export const fetchUserEditedSuccessed = (payload) => ({
  type: USER_EDIT_REQUESTED_SUCCESSED,
  payload,
});

export const fetchUserEditedFailed = (payload) => ({
  type: USER_EDIT_REQUESTED_FAILED,
  payload,
});

export const checkUser = () => ({
  type: CHECK_USER_REQUESTED,
});

export const checkUserSuccessed = (payload) => ({
  type: CHECK_USER_REQUESTED_SUCCESSED,
  payload,
});

export const checkUserFailed = (payload) => ({
  type: CHECK_USER_REQUESTED_FAILED,
  payload,
});
