import Card from '../../components/Card';
import useFinProducts from '../../hooks/useFinProducts';

export default function AnnunitySavings() {
  const { finProducts, error, visibleCount, isLoading, loadMoreProducts } =
    useFinProducts({
      path: 'annuity-savings',
      searchParams: { topFinGrpNo: '060000', pageNo: '1' },
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
