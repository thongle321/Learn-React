import logo from './logo.svg';
import './App.css';
import A from './components/A.js';
import B from './components/B.js';
import C from './components/C.js';
import ProductDetail from './components/ProductDetail.js';
import ProductList from './components/ProductList.js';
var dssp = [
  {Id: 1, Name: "Instant Noodles", Price: 50000},
  {Id: 2, Name: "Ramen Noodles", Price: 30000},
  {Id: 3, Name: "Udon Noodles", Price: 40000},
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
      <ProductDetail product={dssp}></ProductDetail>
      <ProductList listProduct={dssp}></ProductList>
    </div>
  );
}

export default App;
