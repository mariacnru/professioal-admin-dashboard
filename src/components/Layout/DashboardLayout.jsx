import React from "react";
import { Outlet } from "react-router";
import SideBar from "../Common/SideBar/SideBar";
import TopBar from "../Common/TopBar/TopBar";

function DashboardLayout() {
  return (
    <div className="relative">
      <TopBar />  
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
