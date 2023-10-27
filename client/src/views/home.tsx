import Card from "../components/card";
import Rootview from "./root";

const HomeView = () => {
  return (
    <Rootview header="Pagrindinis">
      <main className="flex-grow py-3 mx-5">
        <div className="text-start">
          <h1 className="text-2xl font-bold">Naujausios prekės</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          <Card image="preke1.jpg" title="Prekė 1" rating={4} price={29.99} />
        </div>
      </main>
    </Rootview>
  );
};

export default HomeView;
