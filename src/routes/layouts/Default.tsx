import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

export default function DefaultLayout() {
  return (
    <div className="App">
      <main className="flex flex-col items-center gap-5">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
