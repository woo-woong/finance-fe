import { useState, useEffect } from 'react';
import ky from 'ky';
import Card from '../../components/Card';
import { FinanceProduct } from '../../models/finance-product.interface';

function Deposit() {
  const API_URL = 'http://localhost:8080/finance/deposit';
  const DEFAULT_VISIBLE_COUNT = 3;
  const [finProducts, setFinProducts] = useState<FinanceProduct[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + DEFAULT_VISIBLE_COUNT);
  };

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
        {finProducts.slice(0, visibleCount).map((product) => (
          <Card key={product.finPrdtCd} product={product} />
        ))}
      </div>
    );
  };

  return (
    <>
      {renderProductList()}
      {finProducts && finProducts.length > visibleCount && (
        <button
          type="button"
          onClick={loadMoreProducts}
          className="p-5 shadow-md rounded-md font-black"
        >
          more
        </button>
      )}
    </>
  );
}

export default Deposit;
