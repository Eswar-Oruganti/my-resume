import styles from "./Card.module.css";

export default function Card({ children, className, ...rest }) {
  return (
    <div className={`${styles["cardGeneric"]} ${className}`} {...rest}>
      {children}
    </div>
  );
}
