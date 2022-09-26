import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListDigiratinaEmployeeComponent from "./components/ListDigiratinaEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              component={ListDigiratinaEmployeeComponent}
            ></Route>

            <Route
              path="/employees"
              component={ListDigiratinaEmployeeComponent}
            ></Route>

            <Route path="/add" component={CreateEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
