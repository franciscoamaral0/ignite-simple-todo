import { Header } from "./components/Header";

import styles from "./App.module.css"
import { Tasks } from "./components/Tasks";

export default function App() {
  return (
    <div >
      
      <Header/>
      
      <main className={styles.mainApp}>
      {/* <TodoBar/> */}
      <Tasks/>
      </main>
    </div>
  )
}