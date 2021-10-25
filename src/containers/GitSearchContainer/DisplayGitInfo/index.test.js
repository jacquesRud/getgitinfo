import { render } from "@testing-library/react";
import DisplayGitInfo from "./";

describe("DisplayGitInfos", () => {
  test("Render Empty", () => {
    const { container } = render(<DisplayGitInfo data={[]} />);
    expect(container).toMatchSnapshot();
  });
  test("Render", () => {
    const { container } = render(
      <DisplayGitInfo data={{ items: ["a", ",b", "c"] }} />
    );
    expect(container).toMatchSnapshot();
  });
});
