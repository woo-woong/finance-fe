import { useState, useEffect, useMemo } from 'react';
import ky from 'ky';
import { FinanceProduct } from '@models/finance-product.interface';

export default function useFinProducts({
  path,
  searchParams = {},
  defaultVisibleCount = 3,
}: {
  path: string;
  searchParams: Record<string, string>;
  defaultVisibleCount: number;
}) {
  const API_URL = `http://localhost:8080/finance/${path}`;
  const memoizedSearchParams = useMemo(
    () => searchParams,
    [JSON.stringify(searchParams)]
  );

  const [finProducts, setFinProducts] = useState<FinanceProduct[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + defaultVisibleCount);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await ky
          .get(API_URL, {
            searchParams: memoizedSearchParams,
          })
          .json<FinanceProduct[]>();

        setFinProducts(response);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [path, memoizedSearchParams]);

  return {
    finProducts,
    error,
    visibleCount,
    isLoading,
    loadMoreProducts,
  };
}
