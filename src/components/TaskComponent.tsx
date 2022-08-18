import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles  from "./TaskComponent.module.css"
import {AiFillCheckCircle} from "react-icons/ai"


interface ITodoProps {
  id: string
  title: string;
  isDone: boolean;
  deleteOne: Function
  onCompleted: Function
}
export function TaskComponent({id, title, isDone, deleteOne, onCompleted}: ITodoProps) {

  function handleDeleteTodo() {
    console.log(id)
    deleteOne(id)
  }
  function handleCompletedTodo() {
    onCompleted({id,title, isDone})
  }
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskDivCenter}>
        <div className={styles.taskDiv}>
          
          <div className={styles.taskInfo}>
          
            {isDone === false  ? <Circle onClick={handleCompletedTodo} className={styles.checkIcon} size={19}/> : <AiFillCheckCircle  onClick={handleCompletedTodo}  className={styles.checkDoneIco}  size={19}/>}
            {
              isDone ? <span  style={{textDecoration: "line-through"}} >{title}</span> : 
              <p>{title}</p>
            }
            
          </div>


          <div className={styles.trashIcon} >
            <Trash onClick={handleDeleteTodo}  size={21}/>
          </div>
        </div>
      </div>
    </div>
  )
}