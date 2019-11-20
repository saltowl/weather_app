import React from "react";
import Error from "./Error";
import renderer from "react-test-renderer";

it("Error display correctly", () => {
  const message = "delete city";
  const component = renderer.create(<Error message={message} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
