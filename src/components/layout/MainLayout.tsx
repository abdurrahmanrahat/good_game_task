import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-[80px]">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
