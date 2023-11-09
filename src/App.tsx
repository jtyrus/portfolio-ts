import React from "react";
import NavigationBar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Links from "./components/Links";
import "./App.css";

function App() {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <NavigationBar />
        <About />
        <Projects />
        <Skills />
        <Links />
        <div className="mt-5 h-32 flex justify-center">
          <img className="m-5 h-24" src="./logo.png" alt="Logo" />
        </div>
      </main>
    </>
  );
}

export default App;
