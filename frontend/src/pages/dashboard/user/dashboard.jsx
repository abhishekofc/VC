import { Outlet } from "react-router-dom";

function dashbaord() {
  return (
    <div className="w-full flex flex-row justify-center">
      <div className="w-1/4 bg-red-300 min-h-screen">ergieighiegue</div>
      <div className="w-3/4 bg-red-400 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default dashbaord;
