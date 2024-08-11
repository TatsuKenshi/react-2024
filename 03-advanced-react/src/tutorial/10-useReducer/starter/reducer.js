import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from "./actions";
import { data } from "../../../data";

// reducer function
export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    const removeID = action.payload.id;
    let newPeople = state.people.filter((person) => person.id !== removeID);
    return { ...state, people: newPeople };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
