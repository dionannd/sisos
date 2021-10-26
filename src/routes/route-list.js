import {
  HomePage,
  ProfilePage,
  SavedPage,
  TaggedPage,
  EditProfile,
  EditPassword,
  Activity,
} from "../pages";

const routeList = [
  // Homes
  {
    path: "/home",
    component: HomePage,
  },
  // Profiles
  {
    path: "/:username/",
    component: ProfilePage,
  },
  {
    path: "/:username/saved/",
    component: SavedPage,
  },
  {
    path: "/:username/tagged/",
    component: TaggedPage,
  },
  // Settings
  {
    path: "/setting/accounts/edit/",
    component: EditProfile,
  },
  {
    path: "/setting/accounts/password/change/",
    component: EditPassword,
  },
  {
    path: "/session/activity/",
    component: Activity,
  },
];

export default routeList;
