import { ADD_COMPANY } from "../actions";
import { REMOVE_FROM_FAVS } from "../actions";

const initialState = {
  content: [],
};

const addCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVS:
      return {
        ...state,
        content: state.content.filter((job, i) => {
          return i !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default addCompanyReducer;
