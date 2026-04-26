import {
  RiShoppingBag3Line,
  RiProductHuntLine,
  RiListCheck,
  RiUserLine,
  RiBarChartLine,
  RiStarLine,
  RiMailLine,
} from "react-icons/ri";

const sidebarData = [
  { id: 1, title: "سفارشات", icon: RiShoppingBag3Line, to: "*" },
  { id: 2, title: "محصولات", icon: RiProductHuntLine, to: "products" },
  { id: 3, title: "کتگوری ها", icon: RiListCheck, to: "*" },
  { id: 4, title: "مشتری ها", icon: RiUserLine, to: "users" },
  { id: 5, title: "گزارشات", icon: RiBarChartLine, to: "*" },
  { id: 6, title: "کوپن ها", icon: RiStarLine, to: "*" },
  { id: 7, title: "اینباکس", icon: RiMailLine, to: "*" },
];

export default sidebarData;
