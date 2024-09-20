import { useInsertionEffect, useState } from "react";
import "../../tuan4_css/style.css";

export default function ProductCRUD({ product }) {
    const [products, setProducts] = useState(product);
    const [action, setAction] = useState('view');
    const [editId, setEditId] = useState(-1);
    const [nextId, setNextId] = useState(1 + Math);
    const handleSave = (product) => {
        if (product.Id) {
            setProducts(products.map(p => p.id === product.Id ? product : p));
        }
        else {
            setProducts([...products, { id: nextId, ...product }]);
            setEditId(nextId + 1);
        }
        setAction = ('view');
    }
    const handleDelete = (product) => {
        setProducts(products.filter(p => p.id !== product.Id));
    }
    return (
        <>
            <h1>Product List</h1>
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(products[0]).map(k => <th>{k.toUpperCase()}</th>)}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.Id}>
                            {Object.keys(product).map(k => <td>{product[k]}</td>)}
                            <td>
                                <button disabled={action !== 'view'} onClick={(e) => {
                                    setAction('edit')
                                    setEditId(product.Id)
                                }}>Edit</button>
                                <button disabled={action !== 'view'} onClick={(e) => {
                                    if (window.confirm(`Delete ${product.Name}`)) { handleDelete(product) }
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={Object.keys(products[0]).length + 1}>
                            <button disabled={action !== 'view'} onClick={() => { setAction('create'); setEditId(product.Id) }}>create</button>
                        </td>
                    </tr>
                </tfoot>
            </table >
            {(action === 'edit' || action === 'create') && <EditForm
                product={products.find(p => p.Id == editId)}
                onSave={handleSave}
                onCancel={() => setAction('view')}
            />
            }
        </>

    );

}
const EditForm = ({ product, onSave, onCancel }) => {
    const [products, setProducts] = useState(product ?? {})
    return (
        <div style={{ minWidth: '100px', maxWidth: '50vw', width: 'fit-content', margin: '20px auto' }}>
            <h2>{products.Id ? "Edit" : "Create"}</h2>
            <form onSubmit={e => { onSave(product) }}>
                <div style={{ textAlign: 'left' }}>
                    <label>Name: </label>
                    <input type="text" required value={products.Name} onChange={e => setProducts({ ...product, Name: e.target.value })} /> <br />
                    <label>Price: </label>
                    <input type="text" required value={products.Price} onChange={e => setProducts({ ...product, Price: e.target.value })} /> <br />
                    <label>Description: </label>
                    <input type="text" required value={products.Desc} onChange={e => setProducts({ ...product, Desc: e.target.value })} /> <br />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form >
        </div >
    );
}
