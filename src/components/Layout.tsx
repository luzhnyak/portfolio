import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LayoutWrapper } from "./Layout.styled";
import { Suspense } from "react";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
