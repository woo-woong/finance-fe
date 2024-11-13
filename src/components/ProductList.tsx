import useFinProducts from '../hooks/useFinProducts';
import Card from './Card';

export default function ProductList({
  path,
  searchParams,
}: {
  path: string;
  searchParams: Record<string, string>;
}) {
  const { finProducts, error, visibleCount, isLoading, loadMoreProducts } =
    useFinProducts({
      path,
      searchParams,
      defaultVisibleCount: 3,
    });

  const renderProductList = () => {
    if (error) {
      return <p>Failed to load data: {error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!finProducts) {
      return <p>No products available.</p>;
    }

    return (
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
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
          className="p-5 font-black rounded-md shadow-md"
        >
          more
        </button>
      )}
    </>
  );
}
