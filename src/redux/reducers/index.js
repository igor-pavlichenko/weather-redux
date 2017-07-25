import { combineReducers } from 'redux';
import * as Weather from './reducer_weather';
// import * as ActiveBook from './reducer_active_book';


export const rootReducer = combineReducers({
  weather: Weather.reducer,
});

export const initialState = {
  // books: Books.initialState,
  // activeBook: ActiveBook.initialState,
};

export default rootReducer;
