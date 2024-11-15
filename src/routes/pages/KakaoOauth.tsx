import ky from 'ky';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@stores/authStore';
import Cookies from 'universal-cookie';

export default function KakaoOauth() {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        // 카카오 코드로 토큰 요청
        await ky.get(`http://localhost:8080/login/kakao?code=${code}`, {
          credentials: 'include', // 쿠키 포함 요청
        });

        const jwt = cookies.get('jwt');

        navigate('/');
      } catch (e) {
        console.error('토큰 요청 실패:', e);
        navigate('/');
      }
    };
    if (code) {
      fetchToken();
    }
  }, [code, navigate, cookies]);

  return null;
}
