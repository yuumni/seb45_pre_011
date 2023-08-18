import { SET_EMAIL, SET_USERNAME, SET_PASSWORD, SET_GENDER, SET_PHONE, SET_NICKNAME } from '../actions/actionTypes';

const initialState = {
  email: '',
  username: '',
  password: '',
  gender:'',
  phone: '',
  nick:''
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_GENDER:
      return { ...state, gender: action.payload };
    case SET_PHONE:
      return { ...state, phone: action.payload };
    case SET_NICKNAME:
      return { ...state, nick: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
