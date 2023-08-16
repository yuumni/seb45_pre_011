import { SET_TITLE, SET_CONTENT, SET_USERNAME, SET_EMAIL, SET_PASSWORD } from '../actions/actionTypes';

const initialState = {
  title: '',
  content: '',
  username: '',
  email: '',
  password: ''
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
      case SET_USERNAME:
        return {
          ...state,
          username: action.payload,
        };
        case SET_EMAIL:
          return {
            ...state,
            email: action.payload,
          };
          case SET_PASSWORD:
            return {
              ...state,
              password: action.payload,
            };                  
      default:
      return state;
  }  
};

export default postReducer;