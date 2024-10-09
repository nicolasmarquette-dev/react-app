import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar.component";
import { Home } from "./pages/home.component";
import { Menu } from "./pages/menu.component";
import { useState } from "react";
import { LanguageKeys } from "./constants/labels";

function App() {
  const [languageSelected, setLanguageSelected] = useState<LanguageKeys>("fr");

  return (
    <>
      <NavBar language={languageSelected} setLanguage={setLanguageSelected} />
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={<Home language={languageSelected} />}
          />
          <Route path="/home" element={<Home language={languageSelected} />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
