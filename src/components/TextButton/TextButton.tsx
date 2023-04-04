import { MouseEventHandler } from 'react';
import styles from './TextButton.module.scss';

interface TextButtonProps {
  text: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const TextButton = ({
  text,
  disabled,
  backgroundColor = '#000000',
  textColor = '#FFFFFF',
  onClick,
}: TextButtonProps) => {
  return (
    <button
      className={styles.textButton}
      style={{ backgroundColor, color: textColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
