import { useState } from 'react';
import ky from 'ky';

const API_URL = 'http://localhost:8080/login';

export default function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const response = await ky.post(`${API_URL}`, {
        json: {
          username,
          password,
        },
        credentials: 'include',
      });

      const contentType = response.headers.get('content-type');

      let token;
      if (contentType?.includes('application/json')) {
        const data: any = await response.json();
        token = data.token;
      } else {
        token = await response.text();
      }

      setIsLoggedIn(true);
      console.log('로그인 성공', token);
    } catch (err) {
      setError('로그인 실패. 아이디와 비밀번호를 확인해주세요.');
      console.error('로그인 실패', err);
    }
  };

  const handleLoginClick = async (username: string, password: string) => {
    await login(username, password);
  };

  return {
    login,
    handleLoginClick,
    isLoggedIn,
    error,
  };
}
