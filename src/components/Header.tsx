export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-screen-xl mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            WOOngSalad
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            예적금
          </li>
        </ul>
      </nav>
    </header>
  );
}
