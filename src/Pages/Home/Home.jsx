import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import LastProducts from "./components/LastProducts";
import LastUsers from "./components/LastUsers";
import { NavLink } from "react-router";
import Chart_1 from "./components/Chart_1";

function Home() {
  const card = [
    {
      id: 1,
      title: "همه فروش",
      total: 1000000000,
      totalTitle: "فروش",
      increase: 10.5,
      lastSevenDays: 800000000,
    },
    {
      id: 2,
      title: "همه کاربران",
      total: 10000,
      totalTitle: "کاربران",
      increase: 14.4,
      lastSevenDays: 7.6,
    },
    {
      id: 3,
      title: "همه سفارشات",
      total: 7000,
      totalTitle: "سفارشات",
      increase: 15.4,
      lastSevenDays: 7.6,
    },
  ];

  return (
    <div className="p-10">
      {/* <Header /> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {card.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <Chart_1 />

      <div className="lg:flex *:h-102 gap-5 w-full space-y-5 mt-5">
        <div className="bg-white p-5 rounded-md grow">
          <div className="flex justify-between">
            <h3 className="font-MorabbaMedium mb-5">آخرین محصولات اضافه شده</h3>
            <NavLink
              to={"products"}
              className="underline text-sm text-green-500"
            >
              مشاهده همه محصولات
            </NavLink>
          </div>
          <LastProducts />
        </div>
        <div className="bg-white p-5 rounded-md">
          <div className="flex justify-between">
            <h3 className="font-MorabbaMedium mb-5">آخرین کاربران اضافه شده</h3>
            <NavLink to={"users"} className="underline text-sm text-green-500">
              مشاهده همه کاربران
            </NavLink>
          </div>
          <LastUsers />
        </div>
      </div>
    </div>
  );
}

export default Home;
