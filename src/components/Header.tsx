import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-screen-xl px-6 py-4 mx-auto">
        <ul className="flex justify-between space-x-8 text-lg font-semibold">
          <NavLink
            to="/"
            className="transition-colors cursor-pointer hover:text-blue-500"
          >
            FinPoint
          </NavLink>
          <li className="flex space-x-8">
            <NavLink
              to="/deposit"
              className="transition-colors cursor-pointer hover:text-blue-500"
            >
              정기예금
            </NavLink>
            <NavLink
              to="/savings"
              className="transition-colors cursor-pointer hover:text-blue-500"
            >
              적금
            </NavLink>
            <NavLink
              to="/annuity-savings"
              className="transition-colors cursor-pointer hover:text-blue-500"
            >
              연금 저축
            </NavLink>
            <NavLink
              to="/mortgage-loan"
              className="transition-colors cursor-pointer hover:text-blue-500"
            >
              주택담보대출
            </NavLink>
            <NavLink
              to="/rent-house-loan"
              className="transition-colors cursor-pointer hover:text-blue-500"
            >
              전세자금대출
            </NavLink>
            <NavLink
              to="/credit-loan"
              className="transition-colors cursor-pointer hover:text-blue-500"
            >
              개인신용대출
            </NavLink>
          </li>
          <NavLink
            to="/login"
            className="transition-colors cursor-pointer hover:text-blue-500"
          >
            로그인
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
