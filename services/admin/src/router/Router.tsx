import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../components/App";
import { LazyAbout } from "../pages/about/About.Lazy";

const routes = [
    {
      path: "/admin",
      element: <App />,
      children: [
        {
            path: "/admin/about",
            element: <Suspense fallback={'...Loading'}><LazyAbout /></Suspense>
        }
      ]
    },
  ]

export const router = createBrowserRouter(routes);

export default routes