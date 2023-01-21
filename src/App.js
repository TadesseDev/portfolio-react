import LandingPage from "./components/landingPage";
import Skills from "./components/skills";
import store from "./redux/store";
import RecentWork from "./components/recentWorks";
import Certifications from "./components/certifications";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import background_1 from "./images/background_1.svg";
import background_2 from "./images/background_2.svg";
import { AppDecorations } from "./components/partials/backgroundDecoration";
import { Provider } from "react-redux";
import {
  medias,
  address,
  InformationContext,
} from "./context/informationContext";
function App() {
  const rootNode = document.getElementById("root");
  const config = { attributes: true, childList: true, subtree: true };
  let rootHeight = rootNode?.scrollHeight;
  let vh = 85;
  let top = false;
  const backgrounds = [`url(${background_2})`, `url(${background_1})`];
  const positions = [`100% -15vh`, `0 ${vh}vh`];

  /*
  This aint a simple objects
  - it make sure the is always exactly two decoration image on a single page
  - it make sure half of the decoration image is on the top and the other half is on the bottom
  - it make sure the decoration image is always on the right and left side of the page
*/

  const observer = new MutationObserver(() => {
    if (Math.abs(rootHeight - rootNode.scrollHeight) > 50) {
      for (let i = 0; i < rootHeight / window.innerHeight; i++) {
        vh += 100;
        if (top) {
          backgrounds.push(`url(${background_1})`);
          positions.push(`0 ${vh}vh`);
        } else {
          backgrounds.push(`url(${background_2})`);
          positions.push(`100% ${vh}vh`);
        }
        top = !top;
      }
      rootHeight = rootNode.scrollHeight;
      const decorations = document.getElementsByClassName("root-decoration");
      for (let decoration of decorations) {
        decoration.style.top = `${Math.floor(Math.random() * rootHeight)}px`;
        decoration.style.left = `${Math.floor(Math.random() * 100)}%`;
      }
      rootNode.setAttribute(
        "style",
        `
      background: ${backgrounds.join()};
    background-position: ${positions.join()};
    background-size: auto 30vh;
    background-repeat: no-repeat;
      `
      );
    }
  });
  observer.observe(rootNode, config);
  return (
    <Provider store={store}>
      <InformationContext.Provider value={{ medias, address }}>
        <div className="App">
          <LandingPage />
          <Skills />
          <RecentWork />
          <Certifications />
          <Testimonials />
          <About />
          <Contact />
          <Footer />
          {AppDecorations({
            number: 20,
            className: "root-decoration",
          }).map((decoration) => decoration)}
        </div>
      </InformationContext.Provider>
    </Provider>
  );
}

export default App;
