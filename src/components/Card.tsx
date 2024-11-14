import { FinanceProduct } from '@models/finance-product.interface';

export default function Card({ product }: { product: FinanceProduct }) {
  const { korCoNm, finPrdtNm, joinWay, mtrtInt } = product;
  return (
    <div className="max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg min-w-40">
      <div className="space-y-4">
        {/* korCoNum */}
        <div className="text-sm text-gray-500">금융회사 명</div>
        <div className="text-xl font-semibold text-gray-800">{korCoNm}</div>

        {/* finPrdtNm */}
        <div className="text-sm text-gray-500">금융상품 명</div>
        <div className="text-xl font-semibold text-gray-800">{finPrdtNm}</div>

        {/* joinWay */}
        <div className="text-sm text-gray-500">가입 방법</div>
        <div className="text-lg text-gray-800">{joinWay}</div>

        {/* mtrInt */}
        <div className="text-sm text-gray-500">만기 후 이자율</div>
        <div className="text-lg text-gray-800">{mtrtInt}</div>
      </div>
    </div>
  );
}
