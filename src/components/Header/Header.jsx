import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";
import Cart from "../Cart/Cart";
import "./Header.scss";
import CartIcon from "../Cart/CartIcon/CartIcon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showcart, setShowCart] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <Link className="home" to="/">
              Home
            </Link>
            <Link className="home" to="/category">
              Categories
            </Link>
            <Link className="home" to="/about">
              About
            </Link>
          </ul>
          <div className="center">SHAHNAWAZ e-STORE</div>
          <div className="right">
            <span className="login-icon">
              <Link to="/login">
                <HiOutlineLogin />
              </Link>
            </span>
            <span className="cart-icon">
              <CartIcon />
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Header;
