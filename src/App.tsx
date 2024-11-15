import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from '@routes/layouts/Default';
import Home from '@routes/pages/Home';
import Deposit from '@routes/pages/Deposit';
import Savings from '@routes/pages/Savings';
import AnnunitySavings from '@routes/pages/AnnuitySavings';
import MortgageLoan from '@routes/pages/MortgageLoan';
import RentHouseLoan from '@routes/pages/RentHouseLoan';
import CreditLoan from '@routes/pages/CreditLoan';
import Login from '@routes/pages/Login';
import Logout from '@routes/pages/Logout';
import SignUp from '@routes/pages/SignUp';
import KakaoOauth from '@routes/pages/KakaoOauth';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/deposit', element: <Deposit /> },
      { path: '/savings', element: <Savings /> },
      { path: '/annuity-savings', element: <AnnunitySavings /> },
      { path: '/mortgage-loan', element: <MortgageLoan /> },
      { path: '/rent-house-loan', element: <RentHouseLoan /> },
      { path: '/credit-loan', element: <CreditLoan /> },
      { path: '/login', element: <Login /> },
      { path: '/logout', element: <Logout /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login/oauth2/code/kakao/', element: <KakaoOauth /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
