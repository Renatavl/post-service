import { FieldHookConfig, useField } from 'formik';
import styles from './TextAreaInput.module.css';

interface ITextAreaInputProps {
  label: string;
  placeholder: string;
}

function TextAreaInput({
  label,
  placeholder,
  ...props
}: ITextAreaInputProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className={styles.label}>
        {label}
      </label>
      <textarea className={styles.textInput} {...field} placeholder={placeholder} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
}

export default TextAreaInput;
