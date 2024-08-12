
import "../styles/Navbar.css";
import Navbar from "./Navbar";

import ReactQur from "../api/ReactQur";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Products = () => {
  

  return (
    <div>
      <Navbar />

      <QueryClientProvider client={queryClient}>
<ReactQur />
</QueryClientProvider>

    </div>
  );
};

export default Products;


