import AppLayout from "../../layouts/main";
import Breadcrumb from "../../components/ui/breadcrumb";
import Loader from "../../components/ui/loader";
import ImgSection from "../../partials/product/_imgSection";
import PriceSection from "../../partials/product/_priceSection";
import QtySection from "../../partials/product/_qtySection";
import RatingSection from "../../partials/product/_ratingSection";
import DescSection from "../../partials/product/_descSection";
import BtnSection from "../../partials/product/_btnSection";
import { useProductHandlers } from "../../services/handlers/productHandlers";
import Meta from "../../components/meta";

const ProductView = () => {
  const { addToCartHandler, qty, setQty, product, isLoading } =
    useProductHandlers();

  return (
    <AppLayout>
      <Meta title={product?.name} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex h-full items-center justify-center py-4 md:py-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <ImgSection image={product.image} name={product.name} />
              <div className="md:flex-1 px-4 divide-y">
                <h1 className="text-3xl font-medium text-gray-800 mb-2">
                  {product.name}
                </h1>
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
