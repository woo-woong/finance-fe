import ky from 'ky';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoOauth() {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        // 카카오 코드로 토큰 요청
        await ky.get(`http://localhost:8080/login/kakao?code=${code}`, {
          credentials: 'include', // 쿠키 포함 요청
        });

        // 메인 페이지로 리디렉션
        navigate('/');
      } catch (e) {
        console.error('토큰 요청 실패:', e);
        navigate('/');
      }
    };
    if (code) {
      fetchToken();
    }
  }, [code, navigate]); // `code`와 `navigate` 의존성 추가

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
}
