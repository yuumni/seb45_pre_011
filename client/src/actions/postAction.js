import axios from 'axios';
import { SET_TITLE, SET_CONTENT } from './actionTypes';

export const setTitle = (title) => ({
  type: SET_TITLE,
  payload: title,
});

export const setContent = (content) => ({
  type: SET_CONTENT,
  payload: content,
});

export const savePost = (title, content) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/posts', { title, content });
    console.log('포스팅이 저장되었습니다:', response.data);
    dispatch(setTitle(''));
    dispatch(setContent(''));
  } catch (error) {
    console.error('포스팅 실패:', error);
  }
};