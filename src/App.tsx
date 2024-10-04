import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar.component";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route index element={<></>} />
          <Route path="/blogs" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
