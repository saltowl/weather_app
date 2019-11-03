import React from "react";
import AddCity from "./AddCity";
import renderer from "react-test-renderer";

it("AddCity display correctly", () => {
  const component = renderer.create(<AddCity />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
