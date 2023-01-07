import LandingPage from "./components/landingPage";
import Skills from "./components/skills";
import store from "./redux/store";
import RecentWork from "./components/recentWorks";
import Certifications from "./components/certifications";
import Testimonials from "./components/testimonials";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
        <Skills />
        <RecentWork />
        <Certifications />
        <Testimonials />
      </div>
    </Provider>
  );
}

export default App;
