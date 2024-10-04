// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import "./tuan4_css/style.css"
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [action, setAction] = useState('view');
  const [editId, setEditId] = useState(-1);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?delay=1000')
        if (!res.ok) {
          throw new Error('Loi ket noi');
        }
        const data = await res.json();
        setProducts(data.products)
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false);
      }
    }
    getData()
  }, [])
  const handleSave = (product) => {
    if (product.id) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    }
    else {
      setProducts([...products, { id: products.length + 1, ...product }]);

    }
    setAction('view');
  }
  const handleDelete = (product) => {
    setProducts(products.filter(p => p.id !== product.id));
  }
  return (
    <div className="App">
      {(loading && <p>Loading...</p>)}
      {error && <p>{error.message}</p>}
      <>
        <h1>Product List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>
                  <button disabled={action !== 'view'} onClick={() => {
                    setAction('edit')
                    setEditId(p.id)
                  }}>Edit</button>
                  <button disabled={action !== 'view'} onClick={() => {
                    if (window.confirm(`Delete ${p.title}`)) { handleDelete(p) }
                  }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={products.length > 0 ? Object.keys(products[0]).length + 1 : 5}>
                <button disabled={action !== 'view'} onClick={() => { setAction('create'); setEditId(products.Id) }}>create</button>
              </td>
            </tr>
          </tfoot>
        </table >
        {(action === 'edit' || action === 'create') && <EditForm
          product={products.find(p => p.id === editId)}
          onSave={handleSave}
          onCancel={() => setAction('view')}
        />
        }
      </>
    </div>
  );
}
const EditForm = ({ product, onSave, onCancel }) => {
  const [formProduct, setFormProduct] = useState(product ?? {});;

  return (
    <div style={{ minWidth: '100px', maxWidth: '50vw', width: 'fit-content', margin: '20px auto' }}>
      <h2>{formProduct.id ? "Edit" : "Create"}</h2>
      <form onSubmit={e => { e.preventDefault(); onSave(formProduct); }}>
        <div style={{ textAlign: 'left' }}>
          <label>Title: </label>
          <input type="text" required value={formProduct.title || ''} onChange={e => setFormProduct({ ...formProduct, title: e.target.value })} /> <br />
          <label>Price: </label>
          <input type="text" required value={formProduct.price || ''} onChange={e => setFormProduct({ ...formProduct, price: e.target.value })} /> <br />
          <label>Description: </label>
          <input type="text" required value={formProduct.description || ''} onChange={e => setFormProduct({ ...formProduct, description: e.target.value })} /> <br />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
export default App;
