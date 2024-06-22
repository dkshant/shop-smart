import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
// import Blogs from "./Blogs";

function App() {
  return (
    <BrowserRouter>
      <div className="main-content">
        <Header />
        <Routes>
          <Route index element={<Home/>}/>
          {/* <Route path="/blogs" element={<Blogs/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;