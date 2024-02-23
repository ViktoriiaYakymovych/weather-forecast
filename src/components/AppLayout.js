import { Suspense } from "react";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import Loader from "../components/Loader/Loader";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
  return (
    <>
      <HeaderNav />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
    </>
  );
};

export default AppLayout;
