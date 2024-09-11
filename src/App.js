import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./components/week2/ProductDetail.js";
import ProductList from "./components/week2/ProductList.js";
import Calculator from "./components/week2/Calculator.js";
const product = [
	{ Id: 1, Name: "Ramen", Price: 30000 },
	{ Id: 2, Name: "Udon", Price: 40000 },
	{ Id: 3, Name: "Instant Noodles", Price: 50000 },
];
function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
			{/* <A
        redChild={<B text="hello"> </B>}
        blueChild={<C text="hello"> </C>}
      >
      </A> */}
			{/* <ProductDetail product = {product[0]} />
      <ProductList listProduct = {product}></ProductList> */}
			<Calculator />
		</div>
	);
}

export default App;
