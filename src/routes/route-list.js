import {
  HomePage,
  DetailPostPage,
  ProfilePage,
  SavedPage,
  TaggedPage,
  EditProfile,
  EditPassword,
  Activity,
  MessagePage,
} from "../pages";

const routeList = [
  // Homes
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/posting/detail/:id",
    component: DetailPostPage,
  },
  {
    path: "/direct/inbox",
    component: MessagePage,
  },
  // Profiles
  {
    path: "/:username",
    component: ProfilePage,
  },
  {
    path: "/:username/saved",
    component: SavedPage,
  },
  {
    path: "/:username/tagged",
    component: TaggedPage,
  },
  // Settings
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
