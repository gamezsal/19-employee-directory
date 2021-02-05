import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Header from './components/Header';
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Route exact path="/" component={Home} />
      </Wrapper>
    </Router>
  );
}

export default App;
