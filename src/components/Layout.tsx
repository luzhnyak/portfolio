import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LayoutWrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
