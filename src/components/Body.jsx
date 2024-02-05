import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import { useDispatch } from "react-redux";
import Browse from "./Browse";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
