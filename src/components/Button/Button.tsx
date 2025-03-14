interface ButtonProps {
  title: string;
  type?: string;
  styles?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ title, styles, disabled, onClick }: Partial<ButtonProps>) => {
  return (
    <button className={`${styles}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
