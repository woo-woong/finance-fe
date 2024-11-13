import ProductList from '../../components/ProductList';

// 정기예금
export default function Deposit() {
  return (
    <ProductList
      path="deposit"
      searchParams={{ topFinGrpNo: '020000', pageNo: '1' }}
    />
  );
}
