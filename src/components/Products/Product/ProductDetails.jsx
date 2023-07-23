import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Productdetails.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImgCarousel from "../../Carouse/Carousel";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
  FaYoutube,
} from "react-icons/fa";

import Cart from "../../Cart/Cart";

function ProductDetails() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [showcart, setShowCart] = useState(false);
  const [data, setData] = useState([]);

  const { productId } = useParams();

  const MyImages = [
    singleProduct.images,
    "https://picsum.photos/640/640?r=2493,https://picsum.photos/640/640?r=1181,https://picsum.photos/640/640?r=5206",
    "https://picsum.photos/640/640?r=5020,https://picsum.photos/640/640?r=2500,https://picsum.photos/640/640?r=8660",
    "https://fastly.picsum.photos/id/913/640/640.jpg?hmac=HJ8MP5Ts8DMCQY2Szp05UPEuBGrCgB74TiIUGB98xn0",
  ];
  function singleProductDetail() {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setSingleProduct(data));
  }
  useEffect(() => {
    singleProductDetail();
    setData(singleProduct.images);
  }, []);

  let increaseHandler = () => {
    setCount(count + 1);
  };
  let decreaseHandler = () => {
    count > 1 ? setCount(count - 1) : setCount(count);
  };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            {singleProduct && (
              <>
                <ImgCarousel images={MyImages} />
              </>
            )}
          </div>
          <div className="right">
            <span className="name">{singleProduct.title}</span>
            <span className="price">&#8364; {singleProduct.price}</span>
            <span className="desc">{singleProduct.description}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decreaseHandler}>-</span>
                <span>{count}</span>
                <span onClick={increaseHandler}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => setShowCart(true)}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              {/* <span className="text-bold">
                Category:
                <span>{singleProduct.category.name}</span>
              </span> */}
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <a href="https://www.facebook.com">
                    <div className="icon">
                      <FaFacebookF size={16} />
                    </div>
                  </a>
                  <a href="https://www.twitter.com">
                    <div className="icon">
                      <FaTwitter size={16} />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com">
                    <div className="icon">
                      <FaLinkedinIn size={16} />
                    </div>
                  </a>
                  <a href="https://www.youtube.com">
                    <div className="icon">
                      <FaYoutube size={16} />
                    </div>
                  </a>
                  <a href="https://www.pinterest.com">
                    <div className="icon">
                      <FaPinterest size={16} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com">
                    <div className="icon">
                      <FaInstagram size={16} />
                    </div>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {showcart && (
        <Cart
          setShowCart={setShowCart}
          selectedData={singleProduct}
          count={count}
        />
      )}
    </div>
  );
}

export default ProductDetails;
