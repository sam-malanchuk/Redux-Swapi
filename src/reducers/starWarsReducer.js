import /* we need our action types here*/ {
  FETCHING,
  SUCCESS,
  FAILURE,
} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  errorMessage: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: {
      return {
        ...state,
        fetching: true,
      }
    }
    case SUCCESS: {
      const newData = action.payload.results
      return {
        ...state,
        fetching: false,
        characters: newData,
      }
    }
    case FAILURE: {
      return {
        ...state,
        fetching: false,
        errorMessage: action.payload.message,
      }
    }
    default:
      return state;
  }
};
