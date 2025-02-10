import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about-us"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route path="/*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
