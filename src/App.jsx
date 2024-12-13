import Counter from './components/Counter';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="app container mx-auto">
      <section className='mt-10'>
        <Counter />
        <Products />
      </section>
    </div>
  );
}

export default App;
