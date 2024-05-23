import { FieldHookConfig, useField } from 'formik';
import styles from "./TextInput.module.css";

interface ITextInputProps {
  label: string;
  placeholder: string;
}

function TextInput({
  label,
  placeholder,
  ...props
}: ITextInputProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className={styles.label}>{label}</label>
      <input className={styles.textInput} {...field} placeholder={placeholder} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;
