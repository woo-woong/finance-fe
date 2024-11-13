export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* 메인 배너 */}
      <section className="w-full py-20 mb-10 text-center text-white bg-blue-600">
        <h2 className="text-4xl font-bold">당신의 금융 파트너, FinPoint</h2>
        <p className="mt-4 text-lg">모든 금융 서비스를 손쉽게 관리하세요.</p>
        <button
          type="button"
          className="px-6 py-3 mt-6 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-lg hover:bg-gray-200"
        >
          바로 관리하기
        </button>
      </section>
      <hr className="w-full my-3 border-t border-gray-300" />
      {/* 서비스 섹션 */}
      <section id="services" className="w-full px-4 py-20">
        <h2 className="text-3xl font-semibold text-center">우리의 서비스</h2>
        <div className="flex justify-center gap-10 mt-8">
          <div className="w-1/3 p-6 text-center transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl">
            <h3 className="text-xl font-semibold">계좌 관리</h3>
            <p className="mt-2 break-keep">
              간편한 계좌 관리와 이체 기능을 제공합니다.
            </p>
          </div>
          <div className="w-1/3 p-6 text-center transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl">
            <h3 className="text-xl font-semibold">대출 서비스</h3>
            <p className="mt-2 break-keep">
              맞춤형 대출 상품을 통해 필요한 자금을 지원합니다.
            </p>
          </div>
          <div className="w-1/3 p-6 text-center transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl">
            <h3 className="text-xl font-semibold">투자 서비스</h3>
            <p className="mt-2 break-keep">
              다양한 투자 상품을 통해 금융 포트폴리오를 확장하세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
