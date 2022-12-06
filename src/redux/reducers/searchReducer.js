import { SAVE_VALUE } from "../actions";

const initialState = {
  value: "",
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
