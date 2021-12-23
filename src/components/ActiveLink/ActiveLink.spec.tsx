import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink component", () => {
  it("should render correctly", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should add active class if link is currently active", () => {
    render(
      <>
        <ActiveLink href="/" activeClassName="active">
          <a>Home</a>
        </ActiveLink>
        <ActiveLink href="/test" activeClassName="active">
          <a>Test</a>
        </ActiveLink>
      </>
    );

    expect(screen.getByText("Home")).toHaveClass("active");
    expect(screen.getByText("Test")).not.toHaveClass("active");
  });
});
