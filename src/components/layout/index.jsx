import Navbar from "./Navbar";
import ScrollToTopButton from "../ScrolleToTop";
import Hero from "../hero/Hero";

function Index({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      {children}
      <ScrollToTopButton />
      <footer>footer</footer>
    </div>
  );
}

export default Index;
