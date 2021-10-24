import {
  HomePage,
  ProfilePage,
  EditProfile,
  EditPassword,
  Activity,
} from "../pages";

const routeList = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/:username",
    component: ProfilePage,
  },
  {
    path: "/setting/accounts/edit",
    component: EditProfile,
  },
  {
    path: "/setting/accounts/password/change",
    component: EditPassword,
  },
  {
    path: "/session/activity",
    component: Activity,
  },
];

export default routeList;
