import AppLayout from "../../layouts/main";
import Rating from "../../components/rating";
import Breadcrumb from "../../components/breadcrumb";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../services/slices/productsApiSlice";

const ProductView = () => {
  const { id: productId } = useParams();

  const { data: product, isLoading } = useGetProductDetailsQuery(productId);

  return (
    <AppLayout header="Prekė">
      {isLoading ? (
        <>
          <h2>Kraunama...</h2>
        </>
      ) : (
        <>
          <div className="flex h-full items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] md:h-auto rounded-lg mb-4">
                    <img
                      className="w-full h-full hover:scale-105 transition duration-500 cursor-pointer object-contain"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="md:flex-1 px-4 divide-y">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <Breadcrumb name={product.name} category={product.category} />
                  <div className="flex py-4">
                    <div className="mr-4">
                      <span className="text-2xl text-gray-600">
                        €{product.price}.00
                      </span>
                    </div>
                  </div>
                  <div className="py-4">
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} įvertinimų`}
                    />
                  </div>
                  <div className="py-4">
                    <span className="font-bold text-gray-700">
                      Prekės Aprašymas:
                    </span>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                  <div className="py-4">
                    <p className="mb-2 font-semibold">
                      {product.countInStock >= 1 ? "Sandėlyje" : "Neturime"}
                    </p>
                    <div className="text-center">
                      <button className="w-full bg-gray-900 text-white py-4 px-4 font-bold hover:bg-gray-800">
                        Pridėti į Krepšelį
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AppLayout>
  );
};

export default ProductView;
