import React from "react";
import ReactDOM from "react-dom";
//import { shallow } from "enzyme";
//import renderer from 'react-test-renderer';
import Task from "./Task";


describe("<Task />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Task />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});