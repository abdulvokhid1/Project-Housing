import Buy from "../Components/Buy";
import Sell from "../Components/Sell";
import { About } from "../Components/About";
// import myprofile, { Myprofile } from "../Components/myprofile";
import Myhome from "../Components/Myhome";
import SignIn from "../Components/SingIn";
import { Dashboard } from "../Components/Dashboard";
import home from "../Components/Assets/icons/home.png";
import Homepage from "../Components/Homepage";
// import Myhome from "../Components/Myhome";
import { ReactComponent as dashboard } from "../Components/Assets/icons/dashboard.svg";
import Myprofile from "../Components/Myprofile";
import Profile from "../Components/Profile";
import Propertylist from "../Components/Propertylist";
import Addproperty from "../Components/Addproperty";
import Favorites from "../Components/Favorites";
import SavedSearches from "../Components/SavedSearches";
import Invoices from "../Components/Invoices";
import Inbox from "../Components/Inbox";
import Loggingout from "../Components/Loggingout";
import { ReactComponent as inbox } from "../Components/Assets/icons/inbox.svg";

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
    title: "MyProfile",
    path: "/dashboard",
    element: <Dashboard />,
    icon: "",
    child: [],
  },
  {
    id: 5,
    title: "Singin",
    path: "/signin",
    element: <SignIn />,
    icon: "",
    child: [],
  },
  {
    id: 6,
    title: "About",
    path: "/about",
    element: <About />,
    icon: "",
    child: [],
  },
];

export const dashbar = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    icon: "",
    child: [],
  },
  {
    id: 2,
    title: "My Profile",
    path: "/profile",
    element: <Profile />,
    icon: "",
    child: [],
  },
  {
    id: 3,
    title: "My Proporties List",
    path: "/propertylist",
    element: <Propertylist />,
    icon: "",
    child: [],
  },
  {
    id: 4,
    title: "Add New Property",
    path: "/addproperty",
    element: <Addproperty />,
    icon: "",
    child: [],
  },
  {
    id: 5,
    title: "Favorites",
    path: "/favorites",
    element: <Favorites />,
    icon: "",
    child: [],
  },
  {
    id: 6,
    title: "Saved Searches",
    path: "/searches",
    element: <SavedSearches />,
    icon: "",
    child: [],
  },
  {
    id: 7,
    title: "My Invoices",
    path: "/invoices",
    element: <Invoices />,
    icon: "",
    child: [],
  },
  {
    id: 8,
    title: "Inbox",
    path: "/inbox",
    element: <Inbox />,
    icon: "",
    child: [],
  },
  {
    id: 9,
    title: "Logout",
    path: "/logout",
    element: <Loggingout />,
    icon: "",
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

export const choosing = [
  {
    id: 1,
    icon: { inbox },
    title: "Trusted By Thousands",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
  {
    id: 2,
    icon: "",
    title: "Wide Range Of Properties",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
  {
    id: 3,
    icon: "",
    title: "Financing Made Easy",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
  {
    id: 4,
    icon: "",
    title: "See Neighborhoods",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
];
