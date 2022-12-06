const initialState = {
  jobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: state.jobs.content.filter((job, i) => {
            return i !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
