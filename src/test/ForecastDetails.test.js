import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", function () {
  const validProps = {
    forecast: {
      date: 1525046400000,
      description: "stub description",
      icon: 800,
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 23,
        direction: "s",
      },
      humidity: 30,
    },
  };

  it("renders correctly ", function () {
    const { asFragment } = render(
      <ForecastDetails forecast={validProps.forecast} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
