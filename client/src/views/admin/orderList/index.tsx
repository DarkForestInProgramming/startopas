import AppLayout from "../../../layouts/main";
import Loader from "../../../components/ui/loader";
import { useGetOrdersQuery } from "../../../services/slices/ordersApiSlice";
import AdminTable from "../../../components/ui/table/adminTable";
import Meta from "../../../components/meta";

const OrderListView = () => {
  const { data: orders, isLoading } = useGetOrdersQuery({});
  return (
    <AppLayout>
      <Meta title="Užsakymai" />
      <div className="w-full py-5 md:py-10">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl">Užsakymai</h2>
          {isLoading ? (
            <div className="w-full flex flex-col ">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <Loader />
              </div>
            </div>
          ) : (
            <AdminTable orders={orders} />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default OrderListView;
