import "./Product.scss";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <Link to={`/products/${product.id}`}>
          <img src={product.images} alt="" />
        </Link>
      </div>

      <div className="prod-details">
        <span className="name">{product.title}</span>
        <span className="price"> &#8364; {product.price} </span>
        <span className="name">Category : {product.category.name}</span>
      </div>
    </div>
  );
};

export default Product;
