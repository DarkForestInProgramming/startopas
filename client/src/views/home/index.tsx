import Card from "../../components/card";
import AppLayout from "../../layouts/main";
import { ProductInterface } from "../../services/interfaces/productInterfaces";
import { useGetProductsQuery } from "../../services/slices/productsApiSlice";
import Loader from "../../components/loader";

const HomeView = () => {
  const { data: products, isLoading } = useGetProductsQuery({});
  return (
    <AppLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="flex-grow mx-5 md:py-16 py-4">
          <div className="text-start">
            <h1 className="text-2xl font-bold">Naujausios prekės</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
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
          {/* Grid */}
          {/* <div className="text-start py-5">
            <h1 className="text-2xl font-bold">Kažkokios prekės</h1>
          </div> */}
          {/* <div className="py-5">
            <div className="flex flex-col items-center bg-neutral-100 text-center text-white">
              <div className="container p-6">
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                  <div className="mb-6 lg:mb-0">
                    <img
                      src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                      className="w-full rounded-md shadow-lg"
                      alt="Img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </main>
      )}
    </AppLayout>
  );
};

export default HomeView;
