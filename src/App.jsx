import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-secondary min-h-screen text-primary font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <ProductShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
