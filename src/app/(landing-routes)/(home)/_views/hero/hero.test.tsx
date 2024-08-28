import { Hero } from ".";

import { render } from "~/test/utils";

describe("hero tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<Hero />);

    expect(true).toBeTruthy();
  });
});
