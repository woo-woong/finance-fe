import { useEffect, useState } from 'react';
import DaumAddress from '../../components/DaumAddress';
import SignUpFormInput from '../../components/SignUpFormInput';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    birthDate: '',
    email: '',
    phone: '',
    address: '',
    detailAddress: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange: React.Dispatch<React.SetStateAction<string>> = (
    value
  ) => {
    if (typeof value === 'string') {
      setFormData((prevData) => ({
        ...prevData,
        address: value,
      }));
    }
  };

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, detailAddress: '' }));
  }, [formData.address]);

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">회원가입</h2>
        <form>
          <SignUpFormInput
            label="아이디"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <SignUpFormInput
            label="비밀번호"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <SignUpFormInput
            label="이름"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <SignUpFormInput
            label="생년월일"
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />

          <SignUpFormInput
            label="이메일"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <SignUpFormInput
            label="전화번호"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div className="flex flex-col space-y-0">
            <SignUpFormInput
              label="주소"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled
            />

            <SignUpFormInput
              label="상세 주소"
              type="text"
              id="detailAddress"
              name="detailAddress"
              value={formData.detailAddress}
              onChange={handleInputChange}
              disabled={formData.address.length === 0}
            />
            <DaumAddress setAddress={handleAddressChange} />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
