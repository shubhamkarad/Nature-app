import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";``
import Login from "../components/Login";

test("renders without crashing", () => {
    render(<Login />);
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
});