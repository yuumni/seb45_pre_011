import axios from 'axios';
import { SET_USERNAME, SET_EMAIL, SET_PASSWORD } from './actionTypes';

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const submitAccount = (username, email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/members', { username, email, password });
    console.log('회원 정보가 저장되었습니다:', response.data);
    dispatch(setUsername(''));
    dispatch(setEmail(''));
    dispatch(setPassword(''));
  } catch (error) {
    console.error('회원가입 실패:', error);
  }
};