import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import styles from './CustomInput.module.css';

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
    <div className={styles.inputContainer}>
      <input
        type={visible ? 'text' : type}
        placeholder={placeholder}
        autoComplete="new-password"
        className={alertPassword ? styles.inputAlert : styles.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {visible ? (
        <button
          type="button"
          className={styles.btnShowPassword}
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
          className={styles.btnShowPassword}
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
