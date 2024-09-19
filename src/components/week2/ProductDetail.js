export default function ProductDetail({ product }) {
	return (
		<div className="Detail">
			<b>{product.Id}</b>
			<b>{product.Name}</b>
			<b>{product.Price}</b>
		</div>
	);
}
