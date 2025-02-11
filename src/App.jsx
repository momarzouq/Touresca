import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
