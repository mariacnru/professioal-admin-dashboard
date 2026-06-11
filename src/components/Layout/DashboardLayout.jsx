import React, { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "../Common/SideBar/SideBar";
import TopBar from "../Common/TopBar/TopBar";

function DashboardLayout() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="relative flex min-h-screen">
      <SideBar flag={flag} setFlag={setFlag} />
      <div
        onClick={() => setFlag(false)}
        className={`absolute top-0 w-full h-full bg-black/50 z-10 ${flag ? "inline" : "hidden"}`}
      ></div>

      <section className="w-full flex flex-col">
        <TopBar flag={flag} setFlag={setFlag} />
        <main className="w-full">
          <Outlet />
        </main>
        <div className="text-sm text-center bg-white p-2">
          <p>توسعه داده شده توسط مریم احمدآبادی 2026</p>
        </div>
      </section>
    </div>
  );
}

export default DashboardLayout;
