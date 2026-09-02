import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import BookReader from "./pages/BookReader";
import Articles from "./pages/Articles";
import ArticleReader from "./pages/ArticleReader";
import Gallery from "./pages/Gallery";
import Awards from "./pages/Awards";
import Remembrance from "./pages/Remembrance";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Loader />
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:slug" element={<BookReader />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleReader />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/remembrance" element={<Remembrance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
