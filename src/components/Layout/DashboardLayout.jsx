import React from "react";
import { Outlet } from "react-router";
import SideBar from "../Common/SideBar/SideBar";

function DashboardLayout() {
  return (
    <div>
      <section className="flex">
        <SideBar />
        <main className="w-full">
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default DashboardLayout;
