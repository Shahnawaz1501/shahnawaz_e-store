import React from "react";
import { Link } from "react-scroll";
import { CgShoppingCart } from "react-icons/cg";
function CartIcon() {
  return (
    <div>
      <Link to="products" spy={true} smooth={true} offset={-150} duration={500}>
        <CgShoppingCart />
      </Link>
    </div>
  );
}

export default CartIcon;
