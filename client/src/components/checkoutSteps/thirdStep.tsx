const ThirdStep = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Apmokėjimo Žingsniai</h1>
      <div className="grid grid-cols-1">
        <div className="flex items-start">
          <div className="mr-4 text-2xl text-blue-500">3.</div>
          <div>
            <h2 className="text-lg font-semibold">Mokėjimo informacija</h2>
            <p>Įveskite mokėjimo informaciją ir pasirinkite mokėjimo būdą.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
