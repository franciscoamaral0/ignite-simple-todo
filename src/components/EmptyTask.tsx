import clipBoardIcon from "../assets/Clipboard.svg"
import styles from "./EmptyTask.module.css"


export function EmptyTask() {
  return (
    <article className={styles.emptyTaskArticle}>
      <div className={styles.emptyTaskFirstSection}>
        <div className={styles.emptyTaskElementSection}>
          <img src={clipBoardIcon}/>
          <p>Você ainda nao tem terafas cadastradas</p>
          <span>Crie tarafas e organize sues itens a fazer</span>
        </div>
      </div>
    </article>
  )
}