import type { InputHTMLAttributes } from 'react';
import styles from './InputField.module.css';

export function InputField(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} {...props} />;
}
