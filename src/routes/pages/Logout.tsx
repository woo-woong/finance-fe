import ky from 'ky';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const FINANCIAL_API_URL = process.env.REACT_APP_FINANCIAL_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await ky.get(`${FINANCIAL_API_URL}logout`, {
          credentials: 'include',
        });
        navigate('/');
      } catch (e) {
        console.error('요청 실패', e);
        navigate('/');
      }
    };
    logout();
  }, [FINANCIAL_API_URL, navigate]);

  return null;
}
