import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react";
import { EmptyTask } from "./EmptyTask"
import { TaskComponent } from "./TaskComponent"
import styles from "./Tasks.module.css"
import {v4 as uuidV4} from "uuid"

interface ITodo {
  id: string
  title: string;
  isDone: boolean;
}
export function Tasks() {

  const [todos, setTodos]= useState<ITodo[]>([])
  const [newTodo, setNewTodo] = useState<ITodo>()


  function handleReturnNumbersOfTodoDone(): number {
    let totalTodoDone: number = 0;
    const numberTodosDone = todos.map((todo) => {
      if(todo.isDone == true){
        totalTodoDone +=1
      }
    })
    return totalTodoDone;
  }

  function handleTodo(event: FormEvent) {
  event.preventDefault()

  setTodos([...todos, newTodo!])
  setNewTodo({id: "", title: "", isDone: false})
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    const textTodo= event.target.value;
    
    const newTodo: ITodo = {
    id: uuidV4(),
    title: textTodo,
    isDone: false
  }
    setNewTodo(newTodo);
  }

  function handleDeleteTodo(todosKey: string): void {
    const newTodoWhithoutDeleted = todos.filter((todos) => todos.id != todosKey)
    setTodos(newTodoWhithoutDeleted)
    return
    
  }

  function handleIsDone(todo: ITodo) {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return {...item, isDone: !item.isDone}
      }
      return item
    }))
  }

  const isTodoInputIsEmpty = newTodo?.title.length === 0
  return (
    <section >

    
      <form  onSubmit={handleTodo} className={styles.todoBar}>
        <input name="todo" value={newTodo?.title} onChange={handleNewTodoChange} type="text" placeholder="Adicione uma nova tarefa"/>
        <button disabled={isTodoInputIsEmpty} type="submit">Criar {"\u00a0"} <PlusCircle size={16}/></button>
      </form>
    
    
      <div className={styles.sectionTask}>
        <div className={styles.bodyTask}>
          <p className={styles.textCreated}>Tarefas criadas <span>{todos.length}</span></p>
          <p className={styles.textFinished}>Concluídas<span>{handleReturnNumbersOfTodoDone().toString()} de {todos.length}</span></p>
        </div>
      </div>

      <div className={styles.taskSection}>
      {todos.length >= 1 ?todos.map((todo) => {
        return (
          <TaskComponent key={todo.id} id={todo.id} title={todo.title} isDone={todo.isDone} onCompleted={handleIsDone} deleteOne={handleDeleteTodo}/>
        )
      }) : <EmptyTask/>}
    
      </div>
      
    </section> 
  )
} 