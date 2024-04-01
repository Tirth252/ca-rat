// components/Button.tsx

import React from "react";
import styles from "./styles/button.module.css";
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles["custom-button"]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
