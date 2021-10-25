import { render } from "@testing-library/react";
import SearchBar from "./";

describe("SearchBar", () => {
  test("Render", () => {
    const { container } = render(<SearchBar setSearchedUser={null} />);
    expect(container).toMatchSnapshot();
  });
});
