import kakaoLogo from '../../assets/images/kakao-login.png';

export default function Login() {
  return (
    <div className="flex flex-col items-center p-20 rounded-md shadow-md">
      <h1 className="mb-10 text-xl font-bold">로그인</h1>
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
        <button type="button" className="p-3 bg-blue-200 border rounded-sm">
          로그인
        </button>
        <h1 className="text-lg font-bold">SNS 로그인</h1>
        <img src={kakaoLogo} alt="kakao-login" className="w-10" />
        <div>카카오톡</div>
      </form>
    </div>
  );
}
