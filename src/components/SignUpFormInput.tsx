interface SingUpFormInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const defaultProps: Partial<SingUpFormInputProps> = {
  disabled: false,
};

export default function SignUpFormInput({
  label,
  type,
  id,
  name,
  value,
  onChange,
  disabled,
}: SingUpFormInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="block w-full px-3 py-2 mt-1 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </label>
    </div>
  );
}

SignUpFormInput.defaultProps = defaultProps;
