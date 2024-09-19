// import logo from './logo.svg';
import "./App.css";
// import A from './components/A.js';
// import B from './components/B.js';
// import C from './components/C.js';
// import ProductDetail from "./components/week2/ProductDetail.js";
// import ProductList from "./components/week2/ProductList.js";
// import Calculatordemo from "./components/week2/Calculator-demo.js";
// import ProductEdit from "./components/week3/ProductEdit.js";
import ProductCRUD from "./components/week4/ProductCRUD.js";
const product = [
  { Id: 1, Name: "Instant Noodles", Price: 50000 },
  { Id: 2, Name: "Ramen Noodles", Price: 30000 },
  { Id: 3, Name: "Udon Noodles", Price: 40000 },
  { Id: 4, Name: "Instant Noodles", Price: 50000 },
  { Id: 5, Name: "Ramen Noodles", Price: 30000 },
  { Id: 6, Name: "Udon Noodles", Price: 40000 },
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
      {/*<Calculatordemo />*/}
      <ProductCRUD product={product} />
    </div>
  );
}

export default App;
