import { MouseEventHandler } from 'react';
import styles from './TextButton.module.scss';

type ButtonType = "button" | "submit" | "reset" | undefined;

interface TextButtonProps {
  text: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  type?: ButtonType;
  border?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const TextButton = ({
  text,
  disabled,
  backgroundColor = '#000000',
  textColor = '#FFFFFF',
  type = 'button',
  border = 'none',
  onClick,
}: TextButtonProps) => {
  return (
    <button
      className={styles.textButton}
      type={type}
      style={{ backgroundColor, color: textColor, border }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
