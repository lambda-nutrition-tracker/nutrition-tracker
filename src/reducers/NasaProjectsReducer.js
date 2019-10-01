import {
  FETCH_NASA_PROJECTS_SUCCESS,
  FETCH_NASA_PROJECTS_START,
  FETCH_NASA_PROJECTS_FAILURE
} from "../actions/NasaProjectsAction";

const initialState = {
  nasaProjects: [],
  isFetching: false,
  errors: ""
}

export const nasaProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NASA_PROJECTS_START:
      return {
        ...state,
        errors: "",
        isFetching: true
      }
    case FETCH_NASA_PROJECTS_SUCCESS:
      return {
        ...state,
        errors: "",
        isFetching: false,
        nasaProjects: action.payload
      }
    case FETCH_NASA_PROJECTS_FAILURE:
      return {
        ...state,
        errors: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}