import './App.css';
import { useState, useEffect } from 'react';
import ky from 'ky';
import Header from './components/Header';
import Card from './components/Card';
import { FinanceProduct } from './models/finance-product.interface';

function App() {
  const API_URL = 'http://localhost:8080/finance/deposit';
  const [finProducts, setFinProducts] = useState<FinanceProduct[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ky
          .get(API_URL, {
            searchParams: {
              topFinGrpNo: '020000',
              pageNo: '1',
            },
          })
          .json<FinanceProduct[]>();

        setFinProducts(response);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      }
    };
    fetchData();
  }, []);

  const renderProductList = () => {
    if (error) {
      return <p>Failed to load data: {error.message}</p>;
    }

    if (!finProducts) {
      return <p>Loading...</p>;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {finProducts.map((product) => (
          <Card key={product.finPrdtCd} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <main className="flex flex-col items-center gap-10">
        <Header />
        {renderProductList()}
      </main>
    </div>
  );
}

export default App;
