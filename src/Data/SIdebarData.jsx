import {
  RiShoppingBag3Line,
  RiProductHuntLine,
  RiListCheck,
  RiUserLine,
  RiBarChartLine,
  RiStarLine,
  RiMailLine,
  RiHome2Line,
} from "react-icons/ri";

const sidebarData = [
  { id: 1, title: "داشبورد", icon: RiHome2Line, to: "/" },
  { id: 2, title: "سفارشات", icon: RiShoppingBag3Line, to: "*" },
  { id: 3, title: "محصولات", icon: RiProductHuntLine, to: "products" },
  { id: 4, title: "کتگوری ها", icon: RiListCheck, to: "categiries" },
  { id: 5, title: "مشتری ها", icon: RiUserLine, to: "users" },
  { id: 6, title: "گزارشات", icon: RiBarChartLine, to: "*" },
  { id: 7, title: "کوپن ها", icon: RiStarLine, to: "*" },
  { id: 8, title: "اینباکس", icon: RiMailLine, to: "*" },
];

export default sidebarData;
