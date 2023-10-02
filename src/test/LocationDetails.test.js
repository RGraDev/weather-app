import { render } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";

describe("LocationDetails", function () {
  it("renders the correct city and location props", function () {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />,
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
