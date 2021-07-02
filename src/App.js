import "./App.css";

import MainNavigation from "./shared/MainNavigation/MainNavigation";
import HomePage from "./Home/page/HomePage";
import Footer from "./shared/Footer/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <HomePage />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
