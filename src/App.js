import * as Sentry from "@sentry/react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import CatFacts from "./components/API/CatFacts";

class App extends React.Component {
  //API Call

  render() {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            throw new Error(
              "Oops, something has gone wrong when button was clicked"
            );
          }}
        >
          Do not click on this button
        </button>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>

        <div>
          <CatFacts />
        </div>
      </>
    );
  }
}

export default Sentry.withProfiler(App);
