import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
import App from "../App";
beforeEach(() => {
  render(<App />);
});

test("Test menu bar text content", async () => {
  screen.getByText("Home");
  screen.getByText("Skills");
  screen.getByText("Projects");
  screen.getByText("Certificates");
  screen.getByText("Testimonials");
  screen.getByText("About");
  screen.getByText("Digital presence");
  screen.getByText("Contact me");
});

test("Test menu interaction", async () => {
  const navbar = await screen.findByTestId("navbar");
  expect(navbar.getAttribute("display")).toBe("none");
  const showMenu = screen.getByAltText("open menus");
  const hideMenu = screen.getByAltText("hide");
  fireEvent.click(showMenu);
  expect(navbar.getAttribute("display")).toBe("block");
  fireEvent.click(hideMenu);
  expect(navbar.getAttribute("display")).toBe("none");
});

test("Test landing page text contents", async () => {
  screen.getByText("Tadesse Dubale");
});
