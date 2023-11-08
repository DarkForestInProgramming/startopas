const ThirdStep = () => {
  return (
    <div className="bg-white p-6 md:mt-10 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Pirkimo Žingsniai</h1>
      <div className="grid grid-cols-1">
        <div className="flex items-start">
          <div className="mr-4 text-2xl text-blue-500">3.</div>
          <div>
            <h2 className="text-lg font-semibold">Mokėjimas būdas</h2>
            <p>Pasirinkite mokėjimo būdą.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
