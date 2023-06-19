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

// import { useContext } from "react";
import {
  medias,
  address,
  InformationContext,
} from "../../context/informationContext";

describe("Test About component", () => {
  beforeAll(() => {
    document.body.innerHTML = `<noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div>`;
    render(
      <InformationContext.Provider value={{ medias, address }}>
        <About />
      </InformationContext.Provider>
    );
  });
  it("should render the component", () => {
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
