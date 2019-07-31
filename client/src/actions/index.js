import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const LOGOUT = 'LOGOUT';

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then(payload => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

export const register = (username, password) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/register', {
      username,
      password,
    })
    .then(payload => {
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE });
    });
};

export const logout = () => {
  return { type: LOGOUT };
};

export const fetchItems = () => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get('http://localhost:9000/api/climbs', {
      params: {
        userID: getState().userID,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const removeItem = id => dispatch => {
  dispatch({ type: REMOVE_ITEM_REQUEST });

  axios
    .delete(`http://localhost:9000/api/climb/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REMOVE_ITEM_FAILURE });
    });
};

export const addItem = itemContent => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post('http://localhost:9000/api/climb', {
      userID: getState().userID,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};
