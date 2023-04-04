import React from "react";
import LandingPage from "./pages/LandingPage.js";
import PreSelectPage from "./pages/PreSelectPage.js";
import FinalPage from "./pages/FinalPage";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PreSelectPage/>,
//   },
//   {
//     path: "/landing",
//     element: <LandingPage/>,
//   },
//   {
//     path:"/finalPage",
//     element:<FinalPage/>
//   }
// ]);

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PreSelectPage/>}/>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/finalPage" element={<FinalPage/>}/>
        </Routes>
      </Router>
    </>
  );
};
