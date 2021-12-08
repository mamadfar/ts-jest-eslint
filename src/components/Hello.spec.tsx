import {render, screen} from "@testing-library/react";
import { Hello } from "./Hello";

it("rendres 'Hello world'", () => {
    render(<Hello/>);
    const myElem = screen.getByText(/Hello World/);
    expect(myElem).toBeInTheDocument();
})