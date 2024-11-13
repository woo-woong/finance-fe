import ProductList from '../../components/ProductList';

// 전세자금대출
export default function RentHouseLoan() {
  return (
    <ProductList
      path="rent-house-loan"
      searchParams={{ topFinGrpNo: '020000', pageNo: '1' }}
    />
  );
}
