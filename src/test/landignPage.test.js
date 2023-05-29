import { render, screen, fireEvent } from "@testing-library/react";
import "intersection-observer";
// global.window = window;
// global.document = window.document;
jest.mock("../api/root.js");
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
import App from "../App";
beforeAll(async () => {
  // console.log(
  // "Document body is ",
  // await fetch("../../public/index.html").then((res) => res.text())
  // );
  document.body.innerHTML = `<noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div>`;
  render(<App />);
});

test("menu bar text content", async () => {
  // screen.getByText("Home");
  // screen.getByText("Skills");
  // screen.getByText("Projects");
  // screen.getByText("Certificates");
  // scree
  // n.getByText("Testimonials");
  // screen.getByText("About");
  // screen.getByText("Digital presence");
  // screen.getByText("Contact me");
});

// test("menu interaction", async () => {
//   const navbar = await screen.findByTestId("navbar");
//   expect(navbar.getAttribute("display")).toBe("none");
//   const showMenu = screen.getByAltText("open menus");
//   const hideMenu = screen.getByAltText("hide");
//   fireEvent.click(showMenu);
//   expect(navbar.getAttribute("display")).toBe("block");
//   fireEvent.click(hideMenu);
//   expect(navbar.getAttribute("display")).toBe("none");
// });

// test("landing page text contents", async () => {
//   screen.getByText("Tadesse Dubale");
// });
