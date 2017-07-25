import * as Types from '../types';

export const initialState = {
  weatherData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_WEATHER:
      return { ...state, weatherData: action.payload.data }

    default:
      return { ...state };
  }
};
