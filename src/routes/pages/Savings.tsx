import ProductList from '../../components/ProductList';

// 적금
export default function Savings() {
  return (
    <ProductList
      path="savings"
      searchParams={{ topFinGrpNo: '020000', pageNo: '1' }}
    />
  );
}
