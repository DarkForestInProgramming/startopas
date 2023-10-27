import { useEffect, useState } from "react";
import Card from "../components/card";
import Rootview from "./root";
import { Product } from "../interfaces/product_interfaces";
import axios from "axios";

const HomeView = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Rootview header="Pagrindinis">
      <main className="flex-grow py-3 mx-5">
        <div className="text-start">
          <h1 className="text-2xl font-bold">Naujausios prekės</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          {products.map((product) => (
            <Card
              image={product.image}
              name={product.name}
              rating={product.rating}
              price={product.price}
              numReviews={product.numReviews}
            />
          ))}
        </div>
      </main>
    </Rootview>
  );
};

export default HomeView;
