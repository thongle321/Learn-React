import ProductDetail from "./ProductDetail";

export default function ProductList({ listProduct }) {
	return (
		<div className="List">
			{listProduct.map((p) => (
				<ProductDetail product={p} />
			))}
		</div>
	);
}
