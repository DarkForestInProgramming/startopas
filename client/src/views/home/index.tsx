import Card from "../../components/card";
import AppLayout from "../../layouts/main";
import { Product } from "../../interfaces/productInterfaces";
import { useGetProductsQuery } from "../../services/slices/productsApiSlice";
import Loader from "../../components/loader";

const HomeView = () => {
  const { data: products, isLoading } = useGetProductsQuery({});

  return (
    <AppLayout header="Pagrindinis">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <main className="flex-grow py-3 mx-5">
            <div className="text-start">
              <h1 className="text-2xl font-bold">Naujausios prekės</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
              {products.map((product: Product) => (
                <Card
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  rating={product.rating}
                  price={product.price}
                  numReviews={product.numReviews}
                />
              ))}
            </div>
          </main>
        </>
      )}
    </AppLayout>
  );
};

export default HomeView;
