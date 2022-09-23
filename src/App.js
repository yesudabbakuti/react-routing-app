import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./SiteLayout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1> 404 | Not Found </h1>} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
};
export default App;
