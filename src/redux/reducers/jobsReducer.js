import { GET_JOBS } from "../actions";

const initialState = {
  stock: [],
};
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};
export default jobsReducer;
