import Navbar from "./Navbar";
import ScrollToTopButton from "../ScrolleToTop";
import Footer from "./Footer";

function Index({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Index;
