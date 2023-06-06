import { render, screen, fireEvent } from "@testing-library/react";
import { within } from "@testing-library/dom";
import CommonFunctionsContext, {
  showMoreContent,
  showLessContent,
  hideElement,
} from "../context/commonFunctionsContext";
import {
  medias,
  address,
  InformationContext,
} from "../context/informationContext";
import "intersection-observer";
jest.mock("../api/root.js");
import App from "../App";
import NavBar from "../components/partials/navBar";
import LandingPage from "../components/landingPage";

beforeAll(async () => {
  document.body.innerHTML = `<noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div>`;
});

describe("Navbar items test", () => {
  test("Menu bar text content", async () => {
    render(<NavBar />);
    screen.getByText("Home");
    screen.getByText("Skills");
    screen.getByText("Projects");
    screen.getByText("Certificates");
    screen.getByText("Testimonials");
    screen.getByText("About");
    screen.getByText("social media");
    screen.getByText("Contact me");
  });

  test("Menu bar interaction", async () => {
    render(<App />);
    const navbar = await screen.findByTestId("navbar");
    expect(navbar.getAttribute("display")).toBe("none");
    const showMenu = screen.getByAltText("open menus");
    const hideMenu = within(navbar).getByAltText("hide");
    fireEvent.click(showMenu);
    expect(navbar.getAttribute("display")).toBe("block");
    fireEvent.click(hideMenu);
    expect(navbar.getAttribute("display")).toBe("none");
    fireEvent.click(hideMenu);
  });

  test("Menu bar icons visibility", async () => {
    render(<App />);
    const showMenu = screen.getByAltText("open menus");
    const navbar = await screen.findByTestId("navbar");
    fireEvent.click(showMenu);
    const home = within(navbar).getByAltText("home");
    const skills = within(navbar).getByAltText("skills");
    const projects = within(navbar).getByAltText("recent works");
    const certificates = within(navbar).getByAltText("certificates");
    const testimonials = within(navbar).getByAltText("testimonials");
    const about = within(navbar).getByAltText("about");
    const socialMedia = within(navbar).getByAltText("social medias");
    const contactMe = within(navbar).getByAltText("contact me");

    expect(home).toBeVisible();
    expect(skills).toBeVisible();
    expect(projects).toBeVisible();
    expect(certificates).toBeVisible();
    expect(testimonials).toBeVisible();
    expect(about).toBeVisible();
    expect(socialMedia).toBeVisible();
    expect(contactMe).toBeVisible();
    expect(home.src).toBeTruthy();
    expect(skills.src).toBeTruthy();
    expect(projects.src).toBeTruthy();
    expect(certificates.src).toBeTruthy();
    expect(testimonials.src).toBeTruthy();
    expect(about.src).toBeTruthy();
    expect(socialMedia.src).toBeTruthy();
    expect(contactMe.src).toBeTruthy();
  });
});

describe("test homepage items", () => {
  it("Assert social media icons visibility and functionality", async () => {
    const socialMediaLinks = [
      "https://www.linkedin.com/in/tadessedev",
      "https://twitter.com/tadesseDev",
      "https://angel.co/u/tadesse-alemayehu",
      "http://github.com/tadessedev",
      "https://www.hackerrank.com/TadesseFullStack?hr_r=1",
      "https://www.facebook.com/tadesseDev1",
      "https://www.instagram.com/tadessedev/",
    ];
    render(
      <InformationContext.Provider value={{ medias, address }}>
        <CommonFunctionsContext.Provider
          value={{ showMoreContent, showLessContent, hideElement }}
        >
          <LandingPage />
        </CommonFunctionsContext.Provider>
      </InformationContext.Provider>
    );
    const getMyCv = screen.getAllByAltText(/See /);
    expect(getMyCv.length).toBe(5);
    getMyCv.forEach((element) => {
      // const attributeName = element.closest("a").getAttribute("data-name");
      // console.log("href is : ", typeof attributeName);
      expect(element).toBeVisible();
      expect(socialMediaLinks.includes(element.closest("a").href)).toBeTruthy();
      expect(element.src).toBeTruthy();
    });
  });
});
