export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const ADD_COMPANY = "ADD_COMPANY";
export const GET_JOBS = "GET_JOBS";
export const SAVE_VALUE = "SAVE_VALUE";

export const addCompanyAction = (jobs) => {
  return {
    type: ADD_COMPANY,
    payload: jobs,
  };
};

export const removeFromFavsAction = (i) => {
  return { type: "REMOVE_FROM_FAVS", payload: i };
};

export const saveSearchValue = (value) => {
  return {
    type: SAVE_VALUE,
    payload: value,
  };
};

export const fetchJobs = (endpoint) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + endpoint + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
