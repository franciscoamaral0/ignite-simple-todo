import Logo from "../assets/rocket.svg"
import TextImg from "../assets/todo.svg"
import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
        <img  src={Logo}/> <img  src={TextImg}/>
    </header>
  )
}