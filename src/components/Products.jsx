import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Tooltip } from "react-tooltip";

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

  return (
    <>
      <span className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12 mt-5 ">
        {products.map((prod) => (
          <span className="bg-grey-300" key={prod.id}>
            <img
              className="h-[300px] w-[300px]  p-5 box-shadow-md shadow-black/20  "
              src={prod.image}
              alt=""
            />
            <span className="text-center">{prod.title}</span>
            <span className="ml-10 text-xl text-purple-800 ">{prod.price}</span>
            <br />
            <button
              className="bg-purple-400 w-10vw rounded-sm"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Your items will add to cart !"
            >
              Add to Cart
            </button>
            <Tooltip
              style={{ color: "black", backgroundColor: "rgb(40, 224, 163)" }}
              id="my-tooltip"
            />
          </span>
        ))}
      </span>
    </>
  );
};

export default Products;
