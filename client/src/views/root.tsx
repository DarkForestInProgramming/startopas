import { FC } from "react";
import { RootviewProps } from "../interfaces/RootviewProps";
import Header from "../components/header";
import Footer from "../components/footer";

const Rootview: FC<RootviewProps> = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow py-3">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Rootview;
