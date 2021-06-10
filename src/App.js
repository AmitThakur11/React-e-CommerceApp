import "./styles.css";

import {BrowserRouter as Router} from "react-router-dom"
import  Header from "./conponent/Header";
import Content from "./conponent/Content"
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Content/>

      </Router>
    </div>
  );
}
