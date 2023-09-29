import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", function() {
  const validProps = {
    date: 1111111,
    description: "Stub Description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", function() {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature.max}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
