import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
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
