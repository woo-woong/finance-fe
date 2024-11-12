export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-screen-xl mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            WOOngSalad
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            정기예금
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            적금
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            연금 저축
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            주택담보대출
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            전세자금대출
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            개인신용대출
          </li>
        </ul>
      </nav>
    </header>
  );
}
