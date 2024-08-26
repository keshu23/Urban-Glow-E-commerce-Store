import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Tooltip from "./Tooltip";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Declaring useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  function itemAdd() {
    // alert("your item has been added ✔ ");
  }

  return (
    <>
      <span className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 mt-5 ">
        {products.map((prod) => (
          <span className="bg-gray-200 w-[450px] ml-[30px] " key={prod.id}>
            <img
              className="h-[300px] w-[300px]  p-5 box-shadow-md shadow-black/20 ml-12  "
              src={prod.image}
              alt={prod.title}
            />
            <span className="text-center ml-12">{prod.title}</span>
            <span className="ml-10 text-xl text-purple-800 ml-12 ">
              {prod.price}
            </span>
            <br />
            <Tooltip text="you items will be add !">
              <button
                className="bg-green-500 rounded-lg p-[5px]"
                onClick={itemAdd()}
              >
                Add to Cart
              </button>
            </Tooltip>
          </span>
        ))}
      </span>
    </>
  );
};

export default Products;
