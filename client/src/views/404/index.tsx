import { Link } from "react-router-dom";
import AppLayout from "../../layouts/main";

const NotFoundView = () => {
  return (
    <AppLayout header="404 - Puslapis nerastas">
      <div className="flex h-full items-center justify-center">
        <div className="bg-white p-20 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-500">
            404 - Puslapis nerastas
          </h2>
          <p className="text-gray-600">
            Atsiprašome, bet prašome patikrinti nuorodą arba grįžti į{" "}
            <span className="text-blue-500">
              <Link to="/">pagrindinį puslapį.</Link>
            </span>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFoundView;
