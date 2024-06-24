import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<ProductDetail/>}/>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;