import { SET_TITLE, SET_CONTENT } from '../actions/actionTypes';

const initialState = {
  title: '',
  content: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
      default:
      return state;
  }  
};

export default postReducer;