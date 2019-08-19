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
  userID: localStorage.getItem('craglog-user'),
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
    case REGISTER_SUCCESS:
      localStorage.setItem('craglog-user', action.payload.data._id);
      return {
        ...state,
        userID: localStorage.getItem('craglog-user'),
      };
    case LOGOUT:
      localStorage.removeItem('craglog-user');
      return {
        ...state,
        userID: null,
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
