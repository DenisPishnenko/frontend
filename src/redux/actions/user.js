import { USER_REQUESTED, USER_REQUESTED_FAILED, USER_REQUESTED_SUCCESSED } from '../../constants';

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
