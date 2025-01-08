import { router } from "@pages/router";
import { withProviders } from "./providers";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default withProviders(App);
