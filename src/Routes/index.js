import Home from "../Page/Home";
import Following from "../Page/Following";
import Upload from "../Page/Upload";
import LayoutHeaderOnly from "../layouts/LayoutHeaderOnly";
const publicRoutes = [
  {
    path: "/",
    Comment: Home,
  },
  {
    path: "/following",
    Comment: Following,
  },
  {
    path: "/upload",
    Comment: Upload,
    layout: LayoutHeaderOnly,
  },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
