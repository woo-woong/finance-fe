import ProductList from '../../components/ProductList';

// 주택담보대출
export default function MortgageLoan() {
  return (
    <ProductList
      path="mortgage-loan"
      searchParams={{ topFinGrpNo: '020000', pageNo: '1' }}
    />
  );
}
