import axios from 'react-native-axios';

export const FETCH_NASA_PROJECTS_START = 'FETCH_NASA_PROJECTS_START';
export const FETCH_NASA_PROJECTS_SUCCESS = 'FETCH_NASA_PROJECTS_SUCCESS';
export const FETCH_NASA_PROJECTS_FAILURE = 'FETCH_NASA_PROJECTS_FAILURE';

export const getNasaProjects = () => dispatch => {
  dispatch({
    type: FETCH_NASA_PROJECTS_START
  });
  axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=AvZJjWoD9kNhwsrjIdNxobdYkrBH2EZOy6dlheyY&limit=10")
    .then(nasaProjects => {
      dispatch({ type: FETCH_NASA_PROJECTS_SUCCESS, payload: nasaProjects.data.near_earth_objects })
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_NASA_PROJECTS_FAILURE, payload: error })
    });
}