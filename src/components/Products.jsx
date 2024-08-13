import { useEffect, useState } from "react";
import "../styles/Navbar.css";

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
      <span className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12 mt-5">
        {products.map((prod) => (
          <div key={prod.id}>
            <img
              className="h-[300px] w-[300px]  p-5 "
              src={prod.image}
              alt=""
            />
            <span className="text-center">{prod.title}</span>
            <span className="ml-10 text-xl text-purple-800 ">{prod.price}</span>
          </div>
        ))}
      </span>
    </>
  );
};

export default Products;
