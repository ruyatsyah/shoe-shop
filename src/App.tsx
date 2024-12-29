import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/client/Home';
import Detail from './pages/client/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/detail",
    element:<Detail />,
    errorElement: <div>404 Not Found</div>
  },
])

export default function App() {
  return <RouterProvider router={router} />;
}
