import LandingPage from "./components/landingPage";
import Skills from "./components/skills";
import store from "./redux/store";
import RecentWork from "./components/recentWorks";
import Certifications from "./components/certifications";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import {medias, address, InformationContext } from "./context/informationContext";
function App() {
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
        </div>
      </InformationContext.Provider>
    </Provider>
  );
}

export default App;
