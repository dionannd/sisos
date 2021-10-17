import { HomePage, EditProfile, EditPassword, Activity } from "../pages";

const routeList = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/setting/profile",
    component: EditProfile,
  },
  {
    path: "/setting/password",
    component: EditPassword,
  },
  {
    path: "/setting/activity",
    component: Activity,
  },
];

export default routeList;
