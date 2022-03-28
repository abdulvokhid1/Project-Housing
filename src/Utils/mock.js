import Buy from "../Components/Buy";
import Sell from "../Components/Sell";
import Rent from "../Components/Rent";
// import myprofile, { Myprofile } from "../Components/myprofile";
import Myhome from "../Components/Myhome";
import SignIn from "../Components/SingIn";
import Myprofile from "../Components/Myprofile";
import Homepage from "../Components/Homepage";
// import Myhome from "../Components/Myhome";
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
