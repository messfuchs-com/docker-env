import { STORAGE_NAME } from '../common/constants';

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_NAME);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveToLocalStorageMiddleware = store => next => (action) => {
  const result = next(action);
  saveState(store.getState());
  return result;
};

const saveState = (state) => {
  // console.log(state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_NAME, serializedState);
  } catch (err) {
    console.log(err);
  }
};
