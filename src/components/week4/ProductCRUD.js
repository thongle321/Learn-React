import { useState } from "react";
import "../../tuan4_css/style.css";
const data = [
    { Id: 1, Name: "Instant Noodles", Price: 50000, Description: "ngon" },
    { Id: 2, Name: "Ramen Noodles", Price: 30000,  Description: "ngon" },
    { Id: 3, Name: "Udon Noodles", Price: 40000,  Description: "ngon" },
    { Id: 4, Name: "Instant Noodles", Price: 50000, Description: "ngon"  },
    { Id: 5, Name: "Ramen Noodles", Price: 30000,  Description: "ngon" },
    { Id: 6, Name: "Udon Noodles", Price: 40000,  Description: "ngon" },
];
export default function ProductCRUD({ }) {
    const [products, setProducts] = useState(data);
    const [action, setAction] = useState('view');
    const [editId, setEditId] = useState(-1);
    const [nextId, setNextId] = useState(1 + Math.max(... products.map(p => p.Id)));
    const handleSave = (product) => {
        if (product.Id) {
            setProducts(products.map(p => p.Id === product.Id ? product : p));
        }
        else {
            setProducts([...products, { id: nextId, ...product }]);
            setNextId(nextId + 1);

        }
        setAction('view');
    }
    const handleDelete = (product) => {
        setProducts(products.filter(p => p.Id !== product.Id));
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
                    {products.map((p) => (
                        <tr key={p.Id}>
                            {Object.keys(p).map(k => <td>{p[k]}</td>)}
                            <td>
                                <button disabled={action !== 'view'} onClick={(e) => {
                                    setAction('edit')
                                    setEditId(p.Id)
                                }}>Edit</button>
                                <button disabled={action !== 'view'} onClick={(e) => {
                                    if (window.confirm(`Delete ${p.Name}`)) { handleDelete(p) }
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={Object.keys(products[0]).length + 1}>
                            <button disabled={action !== 'view'} onClick={() => { setAction('create'); setEditId(products.Id) }}>create</button>
                        </td>
                    </tr>
                </tfoot>
            </table >
            {(action === 'edit' || action === 'create') && <EditForm
                product={products.find(p => p.Id === editId)}
                onSave={handleSave}
                onCancel={() => setAction('view')}
            />
            }
        </>

    );

}
const EditForm = ({ data, onSave, onCancel }) => {
    const [product, setProduct] = useState(data ?? {})
    return (
        <div style={{ minWidth: '100px', maxWidth: '50vw', width: 'fit-content', margin: '20px auto' }}>
            <h2>{product.Id ? "Edit" : "Create"}</h2>
            <form onSubmit={e => { onSave(product) }}>
                <div style={{ textAlign: 'left' }}>
                    <label>Name: </label>
                    <input type="text" required value={product.Name} onChange={e => setProduct({ ...product, Name: e.target.value })} /> <br />
                    <label>Price: </label>
                    <input type="text" required value={product.Price} onChange={e => setProduct({ ...product, Price: e.target.value })} /> <br />
                    <label>Description: </label>
                    <input type="text" required value={product.Description} onChange={e => setProduct({ ...product, Description: e.target.value })} /> <br />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form >
        </div >
    );
}
