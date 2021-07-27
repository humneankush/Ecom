import Product from "./components/Product";
import data from "./data";
function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Ecommerce
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </div>
  );
}

export default App;