import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const res1 = setCart(res.data);
        return res1;
      } catch (error) {
        console.error("error occured in fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {cart.map((user) => (
        <div key={user.id}>
          <div className="aspect-w-1 h-[100px] shadow-md shadow-gray-400 mt-5 ">
            {user.name} <br />
            {user.username} <br />
            {user.email} <br />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
