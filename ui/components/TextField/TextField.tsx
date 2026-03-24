import { InputHTMLAttributes } from 'react';
import { textFieldStyles } from './textFieldStyles';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function TextField({ label, value, onChange, error, id, ...rest }: TextFieldProps) {
  return (
    <div className={textFieldStyles.wrapper}>
      {label && (
        <label htmlFor={id} className={textFieldStyles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${textFieldStyles.input} ${error ? textFieldStyles.inputError : textFieldStyles.inputDefault}`}
        {...rest}
      />
      {error && <span className={textFieldStyles.errorMessage}>{error}</span>}
    </div>
  );
}
