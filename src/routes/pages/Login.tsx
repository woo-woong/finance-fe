import kakaoLogo from '../../assets/images/kakao-login.png';

export default function Login() {
  return (
    <div className="flex flex-col items-center p-20 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-7">로그인</h1>
      <form action="" className="flex flex-col items-center">
        <div className="flex flex-col gap-2 mb-5">
          <input
            type="text"
            placeholder="아이디"
            className="p-2 border border-gray-40"
          />
          <input
            type="text"
            placeholder="비밀번호"
            className="p-2 border border-gray-40"
          />
        </div>
        <button
          type="button"
          className="w-full p-3 transition-colors bg-blue-200 border rounded-sm cursor-pointer hover:bg-blue-400"
        >
          로그인
        </button>
        <hr className="w-full my-5 border-t border-gray-300" />
        <div className="flex flex-col items-center gap-2 mt-3">
          <h1 className="text-lg font-bold">SNS 로그인</h1>
          <img src={kakaoLogo} alt="kakao-login" className="w-12" />
          <p className="text-sm">카카오톡</p>
        </div>
      </form>
    </div>
  );
}
