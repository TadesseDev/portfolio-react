import LandingPage from "./components/landingPage";
import Skills from "./components/skills";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
        <Skills />
      </div>
    </Provider>
  );
}

export default App;
