import Buy from "../Components/Buy";
import Sell from "../Components/Sell";
import Rent from "../Components/Rent";
// import myprofile, { Myprofile } from "../Components/myprofile";
import Myhome from "../Components/Myhome";
import SignIn from "../Components/SingIn";
import Myprofile from "../Components/Myprofile";
import Homepage from "../Components/Homepage";
export const navbar = [
  {
    id: 1,
    title: "Buy",
    path: "/homepage",
    element: <Homepage />,
    icon: "",
    child: [],
  },
  {
    id: 2,
    title: "Sell",
    path: "/sell",
    element: <Sell />,
    icon: "",
    child: [],
  },
  {
    id: 3,
    title: "Rent",
    path: "/rent",
    element: <Rent />,
    icon: "",
    child: [],
  },
  {
    id: 4,
    title: "MyProfile",
    path: "/myprofile",
    element: <Myprofile />,
    icon: "",
    child: [],
  },
  {
    id: 5,
    title: "My home",
    path: "/myhome",
    element: <Myhome />,
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
