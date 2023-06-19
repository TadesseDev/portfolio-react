import { screen, render } from "@testing-library/react";
import About from "../about";
import { InView } from "react-intersection-observer";

class IntersectionObserver {
  constructor(callback, options) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

import {
  medias,
  address,
  InformationContext,
} from "../../context/informationContext";

describe("Test About component", () => {
  beforeEach(() => {
    document.body.innerHTML = `<noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div>`;
    render(
      <InformationContext.Provider value={{ medias, address }}>
        <About />
      </InformationContext.Provider>
    );
  });
  it("Assert all section of about me are inside the component", () => {
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(
      screen.getByText(/learning a language is not the the point/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Algorithm and Data Structure enthusiast/)
    ).toBeInTheDocument();
    expect(screen.getByText(/I love writhing clean code,/)).toBeInTheDocument();
    expect(screen.getByText("You can find me...")).toBeInTheDocument();
    expect(screen.getByText("instagram")).toBeInTheDocument();
    expect(screen.getByText("gitHub")).toBeInTheDocument();
    expect(screen.getByText("twitter")).toBeInTheDocument();
    expect(screen.getByText("linkedIn")).toBeInTheDocument();
  });

  it("Assert find me cards have valid link", () => {
    // console.log(screen.debug());
    const socialMediaLinks = [
      "https://www.linkedin.com/in/tadessedev",
      "https://twitter.com/tadesseDev",
      "http://github.com/tadessedev",
      "https://www.instagram.com/tadessedev/",
    ];

    const instagram = screen.getByText("instagram");
    const gitHub = screen.getByText("gitHub");
    const twitter = screen.getByText("twitter");
    const linkedin = screen.getByText("linkedIn");
    expect(instagram.parentNode.querySelector("a").href).toBe(
      socialMediaLinks[3]
    );
    expect(gitHub.parentNode.querySelector("a").href).toBe(socialMediaLinks[2]);
    expect(twitter.parentNode.querySelector("a").href).toBe(
      socialMediaLinks[1]
    );
    expect(linkedin.parentNode.querySelector("a").href).toBe(
      socialMediaLinks[0]
    );
  });
  it("Assert the find me card is visible", () => {});
});
