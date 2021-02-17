import React from "react";
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import Client from "./Client";

test("(<Client /> Matches snapshot", ()=> {
    const component = render(<Client />)
    expect(component.container).toMatchSnapshot();
})