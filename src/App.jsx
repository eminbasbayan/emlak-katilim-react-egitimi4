import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="app container mx-auto">
      <section>
  {/*      <HomePage /> */}
       <ProductsPage />        
       <AboutPage />        
       <ContactPage />        
      </section>
    </div>
  );
}

export default App;
