import { FC } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Root } from "../interfaces/global_interfaces";

const Rootview: FC<Root> = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow py-3">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Rootview;
