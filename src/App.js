import LandingPage from "./components/landingPage";
import Skills from "./components/skills";
import store from "./redux/store";
import RecentWork from "./components/recentWork";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
        <Skills />
        <RecentWork />
      </div>
    </Provider>
  );
}

export default App;
