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
import { Provider } from "react-redux";
import {
  medias,
  address,
  InformationContext,
} from "./context/informationContext";
import CommonFunctionsContext, {
  showMoreContent,
  showLessContent,
  toggleLoader,
} from "./context/commonFunctionsContext";
function App() {
  const rootNode = document.getElementById("root");
  const config = { attributes: true, childList: true, subtree: true };
  let rootHeight = rootNode?.scrollHeight;
  let vh = 85;
  let top = false;
  const backgrounds = [`url(${background_2})`, `url(${background_1})`];
  const positions = [`100% -15vh`, `0 ${vh}vh`];

  /*
  This ain't a simple observer
  - it make sure the is always exactly two background decoration image on a single page
  - it make sure half of the decoration image is on the top and the other half is on the bottom
  - it make sure the decoration image is always on the right and left side of the page
*/

  const observer = new MutationObserver(() => {
    // Re-calculate the decorations if the dom encounter a major update
    if (Math.abs(rootHeight - rootNode.scrollHeight) > 500) {
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
          <CommonFunctionsContext.Provider
            value={{ showMoreContent, showLessContent, toggleLoader }}
          >
          <LandingPage />
          <Skills />
            <RecentWork />
            <Certifications />
            <Testimonials />
          </CommonFunctionsContext.Provider>
          <About />
          <Contact />
          <Footer />
        </div>
      </InformationContext.Provider>
    </Provider>
  );
}

export default App;
