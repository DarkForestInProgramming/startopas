const FirstStep = () => {
  return (
    <div className="bg-white p-6 md:mt-10 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Pirkimo Žingsniai</h1>
      <div className="grid grid-cols-1">
        <div className="flex items-start">
          <div className="mr-4 text-2xl text-blue-500">1.</div>
          <div>
            <h2 className="text-lg font-semibold">Pirkinių krepšelis</h2>
            <p>Pasirinkite prekes ir pridėkite jas į pirkinių krepšelį.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
