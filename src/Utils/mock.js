import Buy from "../Components/Buy";
import Sell from "../Components/Sell";
import Rent from "../Components/Rent";
// import myprofile, { Myprofile } from "../Components/myprofile";
import Myhome from "../Components/Myhome";
import SignIn from "../Components/SingIn";
import Myprofile from "../Components/Myprofile";
import home from "../Components/Assets/icons/home.png";
import Homepage from "../Components/Homepage";
// import Myhome from "../Components/Myhome";
import { ReactComponent as dashboard } from "../Components/Assets/icons/dashboard.svg";
export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Homepage />,
    icon: "",
    child: [],
  },
  {
    id: 2,
    title: "Buy",
    path: "/buy",
    element: <Buy />,
    icon: "",
    child: [],
  },
  {
    id: 3,
    title: "Sell",
    path: "/sell",
    element: <Sell />,
    icon: "",
    child: [],
  },
  {
    id: 4,
    title: "Rent",
    path: "/rent",
    element: <Rent />,
    icon: "",
    child: [],
  },
  {
    id: 5,
    title: "MyProfile",
    path: "/myprofile",
    element: <Myprofile />,
    icon: "",
    child: [],
  },
  {
    id: 6,
    title: "Singin",
    path: "/signin",
    element: <SignIn />,
    icon: "",
    child: [],
  },
];

export const dashbar = [
  {
    id: 1,
    icon: `${dashboard}`,
    title: "Dashboard",
    child: [],
  },
  {
    id: 2,
    icon: "",
    title: "My Profile",
    child: [],
  },
  {
    id: 3,
    icon: "",
    title: "My Proporties List",
    child: [],
  },
  {
    id: 4,
    icon: "",
    title: "Add New Property",
    child: [],
  },
  {
    id: 5,
    icon: "",
    title: "Favorites",
    child: [],
  },
  {
    id: 6,
    icon: "",
    title: "Saved Searches",
    child: [],
  },
  {
    id: 7,
    icon: { dashboard },
    title: "My Invoices",
    child: [],
  },
  {
    id: 8,
    icon: "",
    title: "Inbox",
    child: [],
  },
  {
    id: 9,
    icon: "",
    title: "Logout",
    child: [],
  },
];

export const proporty = [
  {
    id: 1,
    icon: [],
    amount: "15",
    title: "My Proporties",
  },
  {
    id: 2,
    icon: [],
    amount: "22",
    title: "Total Views",
  },
  {
    id: 3,
    icon: [],
    amount: "921",
    title: "Inbox",
  },
  {
    id: 4,
    icon: [],
    amount: "148",
    title: "Total Favorites",
  },
];

export const recentcode = [
  {
    id: 1,
    icon: [],
    title: "Your listing Luxury Family Home has been approved!.",
  },
  {
    id: 2,
    icon: [],
    title: "Kathy Brown left a review on Renovated Apartment",
  },
  {
    id: 3,
    icon: [],
    title: "Someone favorites your Gorgeous Villa Bay View listing!",
  },
  {
    id: 4,
    icon: [],
    title: "Your listing Luxury Family Home has been approved!",
  },
  {
    id: 5,
    icon: [],
    title: "Kathy Brown left a review on Renovated Apartment",
  },
  {
    id: 6,
    icon: [],
    title: "Someone favorites your Gorgeous Villa Bay View listing!",
  },
  {
    id: 7,
    icon: [],
    title: "Your listing Luxury Family Home has been approved!.",
  },
];
