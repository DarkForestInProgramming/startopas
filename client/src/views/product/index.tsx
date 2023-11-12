import AppLayout from "../../layouts/main";
import Breadcrumb from "../../components/breadcrumb";
import Loader from "../../components/loader";
import ImgSection from "../../components/product/imgSection";
import PriceSection from "../../components/product/priceSection";
import QtySection from "../../components/product/qtySection";
import RatingSection from "../../components/product/ratingSection";
import DescSection from "../../components/product/descSection";
import BtnSection from "../../components/product/btnSection";
import { useProductHandlers } from "../../services/handlers/productHandlers";

const ProductView = () => {
  const { addToCartHandler, qty, setQty, product, isLoading } =
    useProductHandlers();

  return (
    <AppLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex h-full items-center justify-center py-4 md:py-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <ImgSection image={product.image} name={product.name} />
              <div className="md:flex-1 px-4 divide-y">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <Breadcrumb name={product.name} category={product.category} />
                <PriceSection price={product.price} />
                {product.countInStock > 0 && (
                  <QtySection
                    qty={qty}
                    setQty={setQty}
                    countInStock={product.countInStock}
                  />
                )}
                <RatingSection
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
                <DescSection description={product.description} />
                <BtnSection
                  countInStock={product.countInStock}
                  addToCartHandler={addToCartHandler}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default ProductView;
