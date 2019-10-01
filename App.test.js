import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


import App from "./App";
import NasaProject from "./src/components/NasaProjectsComponent"

describe('<Nasa />', () => {
  it('renders Nasa Project Component', () => {
    const tree = renderer.create(<NasaProject />).toJSON();
    expect(tree.children.length).toBe // Don't know how to determine childs of a react components
  });

  it('should match snapshot', () => {
    expect(render(<NasaProject />)).toMatchSnapshot();
  });
});