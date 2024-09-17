import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import SideBar from "./SideBar";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="w-screen h-screen grid bg-[#F8F4F0] grid-cols-[18%,82%]">
      <SideBar />
      {isLoading && <Loader />}

      <main className="px-20">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
