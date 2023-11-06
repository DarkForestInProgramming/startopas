import { FC } from "react";
import Header from "../header";
import Footer from "../footer";
import { Root } from "../../services/interfaces/globalInterfaces";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout: FC<Root> = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow py-3">{props.children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default AppLayout;
