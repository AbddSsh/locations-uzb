import { createBrowserRouter } from "react-router-dom";
import { paths } from "@shared/routing";
import { RootLayout } from "./layouts/rootLayout";
import { MainPage } from "./Main";
import { LocationPage } from "./Location";
import { NotFoundPage } from "./Not-Found";

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <RootLayout />,
    children: [
      {
        path: paths.home,
        element: <MainPage />,
      },
      {
        path: `${paths.location}/:id`,
        element: <LocationPage />,
      },
      {
        path: paths.not_found,
        element: <NotFoundPage />,
      },
    ],
  },
]);
