import * as Types from '../types';

export const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_WEATHER:
      return state.concat([action.payload.data]);

    default:
      return state;
  }
};
