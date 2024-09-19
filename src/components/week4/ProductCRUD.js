import { useState } from "react";
import "../../tuan4_css/style.css";

export default function ProductCRUD({ product }) {
    const [products, setProducts] = useState(product);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
        setIsFormVisible(false);
    };
    return (
        <>
            <h1>Product List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.Id}>
                            <td>{product.Id}</td>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
            <button onClick={() => setIsFormVisible(true)}>Add Product</button>
            {isFormVisible && (
                <AddProductForm FormSubmit={handleAddProduct} Cancel={() => setIsFormVisible(false)} />
            )}
        </>

    );

}
const AddProductForm = ({ FormSubmit, Cancel }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && price >= 0) {
            FormSubmit({ Id: id, Name: name, Price: parseInt(price) });
            setId("");
            setName("");
            setPrice("");
        }
    };
    return (
        <>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br />

                <button type="submit">Add</button>
                <button onClick={Cancel}>Cancel</button>
            </form>
        </>
    );
};


