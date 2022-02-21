import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:handle" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
