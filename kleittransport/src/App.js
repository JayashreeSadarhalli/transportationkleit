import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App(props) {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Form}></Route>
        <Route exact path="/display" component={Display}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
