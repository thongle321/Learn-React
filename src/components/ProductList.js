import ProductDetail from "./ProductDetail";

export default function ProductList({listProduct}) {
    return (
        <div className="List">
            {
                listProduct.map((p) => (
                    <ProductDetail product = {p}></ProductDetail>
                ))
            }   
        </div>
    );
}

// }
// export default function ProductList({listProduct}) {
//     return (
//         <div className="List">
//             {
//             listProduct.map((p) => (
//                 <ProductDetail key={p.Id} product={p}>{p.Name}</ProductDetail>
//             ))
//             }
//         </div>
//     );
// }