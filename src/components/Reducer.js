// import { people } from './data';
const reducer = (state, action) => {
  if (action.type === 'ADD_PEOPLE') {
    const newItems = [...state.people, action.payload];
    return { ...state, people: newItems };
  }
  if (action.type === 'REMOVE_NAME') {
    const filteredNames = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: filteredNames };
  }
  if (action.type === 'NO_NAME_AGE') {
    return { ...state, modalOpen: true };
  }
  if (action.type === 'REMOVE_MODAL') {
    console.log({ ...state, modalOpen: false });
    return { ...state, modalOpen: false };
  }
  return state;
};

export default reducer;
