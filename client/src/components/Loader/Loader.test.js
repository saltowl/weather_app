import React from "react";
import Loader from "./Loader";
import renderer from "react-test-renderer";

it("Loader display correctly", () => {
  const message = 'data is loading';
  const component = renderer.create(<Loader message={message} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
