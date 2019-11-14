import React from "react";
import Clouds from "./Clouds";
import renderer from "react-test-renderer";

it("Clouds display correctly", () => {
  const component = renderer.create(<Clouds />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
