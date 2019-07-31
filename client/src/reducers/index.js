import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from 'actions';

const initialState = {
  userID: '',
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        climbs: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case LOGOUT:
      return {
        ...state,
        userID: '',
        climbs: [],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        climbs: [...state.climbs, action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        climbs: [...state.climbs.filter(item => item._id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
