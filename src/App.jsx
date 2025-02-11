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
    <Routes>
      <Route exact path="/" element={
          <Layout>
            <Home />
          </Layout>
        }/>
        <Route path="/destinations" element={
            <Layout>
              <Destination />
            </Layout>
          }/>
            <Route path="/blog" element={
                <Layout>
                  <Blog />
                </Layout>
              }/>
      <Route path="/about-us" element={
          <Layout>
            <About />
          </Layout>
        }/>
      <Route path="/faq" element={
          <Layout>
            <FAQ />
          </Layout>
        }/>
      <Route path="/contact-us" element={
          <Layout>
            <Contact />
          </Layout>
        }/>

      <Route path="/*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
