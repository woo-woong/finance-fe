import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './routes/layouts/Default';
import Home from './routes/pages/Home';
import Deposit from './routes/pages/Deposit';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/deposit', element: <Deposit /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
