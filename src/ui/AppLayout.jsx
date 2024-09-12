import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import SideBar from "./SideBar";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="container">
      <SideBar />
      {isLoading && <Loader />}

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
