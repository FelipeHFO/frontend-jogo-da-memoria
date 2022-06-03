import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type CustomInputProps = {
  type: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  alertPassword?: boolean;
  visible?: boolean;
  setVisible?: Dispatch<SetStateAction<boolean>>;
};

export default function CustomInput({
  type,
  placeholder,
  value,
  setValue,
  alertPassword,
  visible,
  setVisible,
}: CustomInputProps) {
  return (
    <div className="flex justify-between w-3/4 m-5">
      <input
        type={visible ? 'text' : type}
        placeholder={placeholder}
        autoComplete="new-password"
        className={
          alertPassword
            ? 'w-4/5 h-10 m-5 pl-2 border-2 border-red-500 outline-none'
            : 'w-4/5 h-10 bg-transparent text-white border-b pl-2 outline-none placeholder:text-white'
        }
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {visible ? (
        <button
          type="button"
          className="w-1/5"
          onClick={() => setVisible(!visible)}
        >
          <Image
            src="/assets/icons/eye-slash-solid.svg"
            alt="Ícone de um olho com uma barra cortando ele"
            width={25}
            height={25}
          />
        </button>
      ) : (
        <button
          type="button"
          className="w-1/5"
          onClick={() => setVisible(!visible)}
        >
          <Image
            src="/assets/icons/eye-solid.svg"
            alt="Ícone de um olho com uma barra cortando ele"
            width={25}
            height={25}
          />
        </button>
      )}
    </div>
  );
}
