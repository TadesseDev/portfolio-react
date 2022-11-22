import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
import App from "../App";

test("Test menu bar", async () => {
  // ARRANGE
  render(<App />);
  screen.getByText("Tadesse Dubale");
  screen.getByText("Home");
  screen.getByText("Skills");
  screen.getByText("Projects");
  screen.getByText("Certificates");
  screen.getByText("Testimonials");
  screen.getByText("About");
  screen.getByText("Digital presence");
  screen.getByText("Contact me");
  const navbar = await screen.findByTestId("navbar");
  expect(navbar.getAttribute("display")).toBe("none");
  const toggleMenu = screen.getByAltText("open menus");
  fireEvent.click(toggleMenu);
  expect(navbar.getAttribute("display")).toBe("block");
});
