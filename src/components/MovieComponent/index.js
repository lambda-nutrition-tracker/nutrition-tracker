import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

const MovieComponent = (props) => {
  return (
    <Text>{props.user.name}</Text>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user
  }
}

export default connect(mapStateToProps, {})(MovieComponent);