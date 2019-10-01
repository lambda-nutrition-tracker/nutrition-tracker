import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNasaProjects } from '../../actions/NasaProjectsAction';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

const NasaProjectsComponent = (props) => {

  useEffect(() => {
    props.getNasaProjects();
  }, []);

  return (
    <Content>
      {props.isFetching ? (
        <Text> ... </Text>
      ) : (
          props.nasaProjects.map((neo, key) => (
            <Card key={key} >
              <CardItem header>
                <Text> {neo.name} </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {neo.nasa_jpl_url}
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text> {neo.orbital_data.orbit_class.orbit_class_description}</Text>
              </CardItem>
            </Card>
          ))
        )}
    </Content>
  )
}

const mapStateToProps = state => {
  return {
    nasaProjects: state.nasaProjects,
    errors: state.errors,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getNasaProjects })(NasaProjectsComponent);