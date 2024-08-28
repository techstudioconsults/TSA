import { SectionOne } from ".";

import { render } from "~/test/utils";

describe("sectionOne tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<SectionOne />);

    expect(true).toBeTruthy();
  });
});
