import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", function () {
  const validProps = {
    date: 1525046400000,
    description: "Stub Description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: () => {},
  };

  it("renders correctly", function () {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect()}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", function () {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />,
    );

    expect(getByText("Mon Apr 30 2018")).toHaveClass("forecast-summary__date");

    expect(getByText("Stub Description")).toHaveClass(
      "forecast-summary__description",
    );

    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");

    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
