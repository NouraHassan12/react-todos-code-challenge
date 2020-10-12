import React , {useState} from "react";
import { addTodo } from "../../redux/actions";
import styles from "./styles.module.sass";
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';


function TodoForm() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
   
   <form className="align-items-center forrm" style={{display:'flex' , justifyItems:'center'}}
   onSubmit={(e) => {
     e.preventDefault();
         dispatch(addTodo(
            {
              id: uuid(),
              name: name
            }
          ));
       
          setName('');
        }}>
   
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="What do you have to do?"
          className={styles.input}
        />


        <button 
        type="submit"
        className={styles.completeBtn}>Add</button>

  </form>

  );
}

export default TodoForm;
