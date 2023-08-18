import axios from 'axios';
import { SET_USERNAME, SET_EMAIL, SET_PASSWORD, SET_NICKNAME, SET_GENDER, SET_PHONE } from './actionTypes';

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

export const setGender = (gender) => ({
  type: SET_GENDER,
  payload: gender,
})

export const setPhone = (phone) => ({
  type: SET_PHONE,
  payload: phone,
})

export const setNick = (nick) => ({
  type: SET_NICKNAME,
  payload: nick,
})

export const submitAccount = () => async (dispatch, getState) => {
  const { email, username, password, gender, phone, nick } = getState().signup;
    
  try {
    const requestData = {
      email,
      username,
      password,
      gender,
      phone,
      nick,
    };

    const response = await axios.post('https://276d-218-55-39-149.ngrok-free.app/users/signup', requestData );
    console.log('회원 정보가 저장되었습니다:', response.data);
    dispatch(setEmail(''));
    dispatch(setUsername(''));
    dispatch(setPassword(''));
    dispatch(setGender(''));
    dispatch(setPhone(''));
    dispatch(setNick(''));
  } catch (error) {
    console.error('회원가입 실패:', error);
  }
};