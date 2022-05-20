import "./App.css";
import SearchParams from "./SearchParams";
import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import About from "./About";
import ThemeContext from "./themeContext";
import { useState } from "react";

function App() {
  const theme = useState("pink");
  const [user, setUser] = useState([])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeContext.Provider value={theme}>
            <SearchParams  />
          </ThemeContext.Provider>
        }
      />

      <Route
        exact
        path="/details/:id"
        element={
          <ThemeContext.Provider value={theme}>
            <Details />{" "}
          </ThemeContext.Provider>
        }
      />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

// app.js > test1.js > test2.js > test3.js > test4.js > test5.js
// create a variable in app.js and display that variable on every component
