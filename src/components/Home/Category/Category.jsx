import "./Category.scss";
import { useEffect, useState } from "react";
import Products from "../../Products/Products";
const Category = () => {
  const [categories, setCategories] = useState([]);
  function LoadCategories() {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }

  useEffect(() => {
    LoadCategories();
  }, []);


  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <img src={category.image} alt="" />
            <div className="categories">
              <span className="name">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
