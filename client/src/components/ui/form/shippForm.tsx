import { ShippingInterface } from "../../../services/interfaces/paymentInterfaces";

const ShippingForm: React.FC<ShippingInterface> = ({
  submitHandler,
  address,
  setAddress,
  city,
  setCity,
  postalCode,
  setPostalCode,
  country,
  setCountry,
}) => {
  return (
    <div className="mt-5 md:mt-10">
      <div className="bg-white p-6 md:p-24 shadow-md rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Pristatymo Informacija</h1>
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Adresas</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite adresą"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Miestas</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite miestą"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Pašto kodas</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite pašto kodą"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Šalis</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Įveskite šalį"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-4 md:mt-6">
            <button className="py-2 px-4 roun w-full md:w-32 ">Tęsti</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
