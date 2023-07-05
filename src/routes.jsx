import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

import { Home, Profile, PaymentsTable, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Landing from "./pages/auth/landing";
import ContactUs from "./pages/contact-us";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "Payments",
        path: "/tables",
        element: <PaymentsTable />,
      },

      {
        icon: <BellIcon {...icon} />,
        name: "History",
        path: "/notifications",
        element: <Notifications />,
      },

      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },

      

      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Contact Us",
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    title: "Contact Us",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "landing",
        path: "/landing",
        element: <Landing />,
      },
    ],
  },
];

export default routes;
