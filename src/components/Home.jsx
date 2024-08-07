import Navbar from "./Navbar";
import "../styles/Navbar.css";
import ReactQur from "../api/ReactQur";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <ReactQur />
      </QueryClientProvider>
    </>
  );
}
