import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import BookInstructor from "./component/BookInstructor";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <BookInstructor/>
    </div>
  );
}

export default App;
