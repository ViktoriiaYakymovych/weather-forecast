import { Suspense } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import Loader from "../Loader/Loader";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Main } from "./AppLayout.styled";

const AppLayout = () => {
  return (
    <>
      <HeaderNav />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster />
      </Main>
    </>
  );
};

export default AppLayout;
