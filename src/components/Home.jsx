import ScrollToTopButton from "../ScrolleToTop";
import Hero from "./home/hero/Hero";
import Main from "./home/main/Main";



// responsible of displaying home sections...
export default function Home() {
  return (
    <main>
      <Hero/>
      <Main />
      <ScrollToTopButton/>
    </main>
  );
}
