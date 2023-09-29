import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import { location, forecasts } from "../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    const { asFragment } = render(
      <App forecasts={forecasts} location={location} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
