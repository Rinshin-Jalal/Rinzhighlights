import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import Navbar from "./comps/Navbar/Navbar";
import Search from "./pages/Search/Search";

function App() {
  const [highlights, setHighlights] = useState([]);
  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((res) => res.json())
      .then((fdata) => {
        setHighlights(fdata.response);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home highlights={highlights} />
          </Route>
          <Route path="/video/:id" exact>
            <Video highlights={highlights} />
          </Route>
          <Route path="/search/" exact>
            <Search highlights={highlights} />
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <a href="https://www.rinzhin.net">
          <h4 style={{ color: "rgb(197,255,255)", textAlign: "right" }}>
            by Rinshin Jalal
          </h4>
        </a>
      </div>
    </Router>
  );
}

export default App;
