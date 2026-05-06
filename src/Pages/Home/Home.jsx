import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

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
      id: 2,
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
      <div className="grid grid-cols-3 gap-5">
        {card.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
