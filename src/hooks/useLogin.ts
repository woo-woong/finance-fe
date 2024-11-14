import { useState } from 'react';
import ky from 'ky';

const API_URL = 'https://example.com/api';

export default function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const response = await ky
        .post(`${API_URL}/login`, {
          json: {
            username,
            password,
          },
        })
        .json();

      const { token }: any = response;

      // 로그인 성공 시 토큰을 localStorage에 저장하고, 로그인 상태를 업데이트
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      console.log('로그인 성공', token);
    } catch (err) {
      setError('로그인 실패. 아이디와 비밀번호를 확인해주세요.');
      console.error('로그인 실패', err);
    }
  };

  const handleLoginClick = (username: string, password: string) => {
    login(username, password);
  };

  const apiWithAuth = ky.create({
    prefixUrl: API_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return {
    isLoggedIn,
    handleLoginClick,
    apiWithAuth,
    error,
  };
}
