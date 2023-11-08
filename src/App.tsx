import React from "react";
import NavigationBar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Links from "./components/Links";
import "./App.css";
import { Input } from "@material-tailwind/react";

function App() {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <NavigationBar />
        <About />
        <Projects />
        <Skills />
        <Links />
      </main>
    </>
  );
}

export default App;
