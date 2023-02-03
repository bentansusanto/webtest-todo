import { ReactNode } from "react";
import Inbox from "../components/Inbox";
import Navbar from "../components/Navbar";

const Layout = ({children} : {children : ReactNode}) => {
  return (
    <div className="flex relative">
      <Navbar />
      <main>{children}</main>
      <Inbox/>
    </div>
  );
};

export default Layout;
