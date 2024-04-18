"use client";

interface ButtonProps {
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={handleClick}>remover task</button>;
};

export default Button;
