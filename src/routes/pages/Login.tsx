import { NavLink } from 'react-router-dom';
import kakaoLogo from '@assets/images/kakao-login.png';
import useLogin from '@hooks/useLogin';
import { useState } from 'react';

export default function Login() {
  const handleSocialLoginClick = () => {
    console.log('test');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLoginClick, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLoginClick(username, password);
  };

  return (
    <div className="flex flex-col items-center p-20 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-7">로그인</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col w-full gap-2 mb-5">
          <input
            type="text"
            placeholder="아이디"
            className="p-2 border border-gray-40"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="p-2 border border-gray-40"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 font-semibold transition-colors bg-blue-200 border rounded-sm cursor-pointer hover:bg-blue-400"
        >
          로그인
        </button>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <nav>
          <ul className="flex gap-2 p-4">
            <li>아이디 찾기</li> |<li>비밀번호 찾기</li> |
            <NavLink to="/signup">
              <li>회원가입</li>
            </NavLink>
          </ul>
        </nav>
        <hr className="w-full my-3 border-t border-gray-300" />
        <div className="flex flex-col items-center gap-2 mt-3">
          <h1 className="text-lg font-bold">SNS 로그인</h1>
          <button
            type="button"
            className="flex flex-col items-center gap-2 mt-3 transition-all duration-300 transform hover:scale-102 hover:shadow-lg active:scale-98"
            onClick={handleSocialLoginClick}
          >
            <img
              src={kakaoLogo}
              alt="카카오 로그인"
              className="w-12 transition-transform duration-300 cursor-pointer hover:scale-110"
            />
          </button>
          <p className="text-sm font-medium">카카오톡</p>
        </div>
      </form>
    </div>
  );
}
