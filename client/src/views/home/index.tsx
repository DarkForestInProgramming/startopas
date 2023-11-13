import Card from "../../components/ui/card";
import AppLayout from "../../layouts/main";
import { ProductInterface } from "../../services/interfaces/productInterfaces";
import { useGetProductsQuery } from "../../services/slices/productsApiSlice";
import Loader from "../../components/ui/loader";
import Meta from "../../components/meta";
import ConsolesSection from "../../partials/home/_conSection";
import PhoneSection from "../../partials/home/_phonSection";

const HomeView = () => {
  const { data: products, isLoading } = useGetProductsQuery({});
  return (
    <AppLayout>
      <Meta />
      {isLoading ? (
        <Loader />
      ) : (
        <main className="flex-grow mx-5 my-4">
          <ConsolesSection />
          <div className="text-start my-5">
            <h1 className="text-2xl font-bold">Naujausios prekės</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
            {products.map((product: ProductInterface) => (
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
          <PhoneSection />
        </main>
      )}
    </AppLayout>
  );
};

export default HomeView;
