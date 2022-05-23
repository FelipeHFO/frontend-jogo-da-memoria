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
    <div className="flex justify-between w-3/4 m-5 bg-white">
      <input
        type={visible ? 'text' : type}
        placeholder={placeholder}
        className={
          alertPassword
            ? 'w-4/5 h-10 m-5 pl-2 border-2 border-red-500 outline-none'
            : 'w-4/5 h-10 my-2 pl-2 outline-none'
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
          X
        </button>
      ) : (
        <button
          type="button"
          className="w-1/5"
          onClick={() => setVisible(!visible)}
        >
          O
        </button>
      )}
    </div>
  );
}
