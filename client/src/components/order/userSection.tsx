import { OrderInterface } from "../../services/interfaces/orderInterfaces";

const UserSection = (props: { order: OrderInterface }) => {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold">Pirkėjo Informacija:</h2>
      <p className="mt-4">
        <span className="font-bold">Vartotojo Vardas: </span>
        {props.order.user.name}
      </p>
      <p className="mt-4">
        <span className="font-bold">El. Paštas: </span>
        {props.order.user.email}
      </p>
      <p className="mt-4 flex">
        <span className="font-bold">Pristatymas:&nbsp;</span>
        {props.order.isDelivered ? (
          <span className="text-green-600">
            Pristatyta {props.order.deliveredAt}
          </span>
        ) : (
          <span className="text-red-600">Nepristatyta</span>
        )}
      </p>
    </div>
  );
};

export default UserSection;
