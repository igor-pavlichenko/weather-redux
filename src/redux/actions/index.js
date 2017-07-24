const API_KEY = 'ad40d51a786cfe57bfc2ff24f5737928';

export function selectBook(city) {
  // selectBook is an ActionCreater, it needs to return an action
  // an object with a type property.
  return {
    type: 'CITY_SELECTED',
    payload: city,
  }
}
