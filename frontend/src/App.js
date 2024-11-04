import Footer from "./app/components/Footer";
import Header from "./app/components/Header";
import Home from "./app/pages/Home/Home";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </>
  );
}

export default App;
