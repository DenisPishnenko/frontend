import React from "react";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ShowModal from "./components/ShowModal/ShowModal";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <ShowModal />
    </div>
  );
}

export default App;
