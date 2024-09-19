import { useState } from "react";
const product = [
	{ Id: 1, Name: "Instant Noodles", Price: 50000 },
	{ Id: 2, Name: "Ramen Noodles", Price: 30000 },
	{ Id: 3, Name: "Udon Noodles", Price: 40000 },
	{ Id: 4, Name: "Instant Noodles", Price: 50000 },
	{ Id: 5, Name: "Ramen Noodles", Price: 30000 },
	{ Id: 6, Name: "Udon Noodles", Price: 40000 },
];
export default function ProductEdit() {
	const [products, setProducts] = useState(product);
	return (
		<>
			{products.map((product) => (
				<div className="product">
					<span className="id">{product.Id}</span>
					<input
						className="name"
						value={product.Name}
						onChange={(e) => {
							const id = product.Id;
							setProducts(
								products.map((p) => {
									return p.Id === id ? { ...p, Name: e.target.value } : p;
								}),
							);
						}}
					/>
					<input className="price" value={product.Price} />
				</div>
			))}
		</>
	);
}
