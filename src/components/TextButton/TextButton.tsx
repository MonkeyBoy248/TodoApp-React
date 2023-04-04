import { MouseEventHandler } from 'react';
import styles from './TextButton.module.scss';

type ButtonType = "button" | "submit" | "reset" | undefined;

interface TextButtonProps {
  text: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const TextButton = ({
  text,
  disabled,
  backgroundColor = '#000000',
  textColor = '#FFFFFF',
  type = 'button',
  onClick,
}: TextButtonProps) => {
  return (
    <button
      className={styles.textButton}
      type={type}
      style={{ backgroundColor, color: textColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
