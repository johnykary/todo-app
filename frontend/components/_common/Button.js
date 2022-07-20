import styles from "../../styles/Button.module.css"

export function Button({ text, onClick, type, disabled = false }) {
  const findClass = () => {
    if (type === "ADD") {
      return styles.addBtn
    } else if (type === "DELETE") {
      return styles.deleteBtn
    } else if (type === "EDIT") {
      return styles.editBtn
    }
  }
  return (
    <button disabled={disabled} className={findClass()} onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: "",
  onClick: () => {},
  type: null,
  disabled: false,
}
