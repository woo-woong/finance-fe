import './App.css';
import { useState, useEffect } from 'react';
import ky from 'ky';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const API_KEY = '3aa82da50c82362230f42d308463d03c';
  const [finProducts, setFinProducts] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ky
          .get(
            'https://cors-anywhere.herokuapp.com/http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json',
            {
              searchParams: {
                auth: API_KEY,
                topFinGrpNo: '020000',
                pageNo: '1',
              },
            }
          )
          .json();

        setFinProducts(response as {});
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(err as any);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <main className="flex flex-col items-center">
        <Header />
        <Card />
      </main>
    </div>
  );
}

export default App;
