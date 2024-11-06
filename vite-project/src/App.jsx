import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
function App() {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet />
    </Provider>
  );
}
export default App;
