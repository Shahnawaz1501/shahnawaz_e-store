import "./Products.scss";
import Product from "./Product/Product"
import { useEffect, useState } from "react";
const Products = ({ innerPage, headingText}) => {
  
  const [products,setProducts]=useState([])
  const [categories,setCategories]=useState([])
  const [isLoading, setIsLoading] = useState(true);
  function LoadProducts(url){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        
        setProducts(data)
        setIsLoading(false);
    })
}
function LoadCategories(){
  fetch("https://api.escuelajs.co/api/v1/categories")
  .then(response=>response.json())
  .then(data=>{
      
      setCategories(data)
  })

}
useEffect(()=>{
  LoadCategories()
  LoadProducts("https://api.escuelajs.co/api/v1/products")
 },[])
 function handleCategoryChange(e){
  LoadProducts(`https://api.escuelajs.co/api/v1/products/?categoryId=${e.target.value}`)
}

    return (
      <div className="products-container">
       <div className="categ">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        
       <div>
       <label className="labelCat">SELECT A CATEGORY  </label>
       
        <select className="select"  onChange={handleCategoryChange}>
        {
              categories.map(category=>
                            <option key={category.id} value={category.id}>{category.name}</option>
                            )
                    }
        </select>
       
       </div>
        </div>
        <div className="products">
         {
            isLoading?(<p>Loading...</p>):(products.map(product=>
              <Product product={product}/>

              ))

         }
          
        </div>
      </div>
    );
};

export default Products;
