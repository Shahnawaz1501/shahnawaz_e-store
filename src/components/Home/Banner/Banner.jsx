import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.webp";
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>OFFER</h1>
          <h5>
            We want to bring the kids, the parents, the grandparents and
            grandkids together, we want them to have a shared viewing
            experience. We want the kids to talk about it in the playground, dad
            to talk about it down the pub, grandma to talk about it while she's
            out shopping.
          </h5>
          <div className="ctas">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
            >
              <div className="banner-cta">Contact Us</div>
            </Link>

            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <div className="banner-cta v2">Shop Now</div>
            </Link>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="image" />
      </div>
    </div>
  );
};

export default Banner;
