import { FinanceProduct } from '../models/finance-product.interface';

export default function Card({ product }: { product: FinanceProduct }) {
  const { korCoNm, finPrdtNm, joinWay, mtrtInt } = product;
  return (
    <div className="max-w-sm mx-auto p-6 min-w-40 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="space-y-4">
        {/* korCoNum */}
        <div className="text-gray-500 text-sm">금융회사 명</div>
        <div className="font-semibold text-xl text-gray-800">{korCoNm}</div>

        {/* finPrdtNm */}
        <div className="text-gray-500 text-sm">금융상품 명</div>
        <div className="font-semibold text-xl text-gray-800">{finPrdtNm}</div>

        {/* joinWay */}
        <div className="text-gray-500 text-sm">가입 방법</div>
        <div className="text-lg text-gray-800">{joinWay}</div>

        {/* mtrInt */}
        <div className="text-gray-500 text-sm">만기 후 이자율</div>
        <div className="text-lg text-gray-800">{mtrtInt}</div>
      </div>
    </div>
  );
}
