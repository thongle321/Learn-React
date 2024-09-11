export default function ProductDetail({ product }) {
  return (
    <div className="Detail">
      <a href={`/product-info/?id=${product.Id}`}>{product.Name}</a>
      <b>{product.Price}</b>
    </div>
  );
}
