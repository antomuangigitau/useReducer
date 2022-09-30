import React, { useReducer, useContext } from 'react';
import reducer from './Reducer';
import { buttons } from './data';
const AppContext = React.createContext();

const initialState = {
  modalOpen: false,
  buttons,
  people: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPeople = (newItem) => {
    dispatch({ type: 'ADD_PEOPLE', payload: newItem });
  };
  const nothingAdded = () => {
    dispatch({ type: 'NO_NAME_AGE' });
  };
  const remove = (id) => {
    dispatch({ type: 'REMOVE_NAME', payload: id });
  };
  const closeModal = () => {
    dispatch({ type: 'REMOVE_MODAL' });
  };
  return (
    <AppContext.Provider
      value={{ ...state, remove, addPeople, nothingAdded, closeModal }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
