import ky from 'ky';

export default function useLogin() {
  const API_URL = 'https://example.com/api';

  const login = async (username: any, password: any) => {
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
      localStorage.setItem('token', token), console.log('로그인 성공', token);
    } catch (error) {
      console.error('로그인 실패', error);
    }
  };

  const handleLoginClick = () => {
    const username = 'test';
    const password = 'test';
    login(username, password);
  };

  const apiWithAuth = ky.create({
    prefixUrl: API_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}
