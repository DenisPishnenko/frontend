import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import { store } from "./redux/store";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
