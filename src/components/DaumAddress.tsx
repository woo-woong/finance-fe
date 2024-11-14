import { useDaumPostcodePopup } from 'react-daum-postcode';

export default function DaumAddress({
  setAddress,
}: {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}) {
  const scriptUrl = process.env.REACT_APP_DAUM_ADDRESS_API;
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-1/6 px-2 py-1 ml-auto text-sm text-blue-500 transition-colors duration-200 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      주소 검색
    </button>
  );
}
