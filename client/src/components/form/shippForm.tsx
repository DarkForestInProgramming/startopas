import { ShippingInterface } from "../../services/interfaces/paymentInterfaces";

const ShippingForm: React.FC<ShippingInterface> = (props) => {
  return (
    <main className="md:py-16 py-4">
      <div className="bg-white p-6 md:p-24 shadow-md rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Pristatymo Informacija</h1>
        <form onSubmit={props.submitHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Adresas</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite adresą"
                value={props.address}
                onChange={(e) => props.setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Miestas</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite miestą"
                value={props.city}
                onChange={(e) => props.setCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Pašto kodas</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite pašto kodą"
                value={props.postalCode}
                onChange={(e) => props.setPostalCode(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Šalis</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite šalį"
                value={props.country}
                onChange={(e) => props.setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-4 md:mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full md:w-32 hover:bg-blue-600"
            >
              Tęsti
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ShippingForm;
