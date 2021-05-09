import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Home from '../components/Home';

test("renders without crashing", () => {
    render(<Home />);
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
});