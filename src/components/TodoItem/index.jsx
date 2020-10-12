import React, { useState } from "react";
import styles from "./styles.module.sass";
import { useDispatch } from "react-redux";
import { DeleteTodo, UpdateTodo } from "../../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <div className="row  align-items-center">
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h2 className={styles.title}>{todo.name}</h2>
          )}
        </div>

        <button
          onClick={() => {

            dispatch(UpdateTodo(
              {
                ...todo,
                name:name

              }
            ))
            if(editable){
              setName(todo.name);
            }
            setEditable(!editable);
          }}
          className={styles.completeBtn}
        >
          {editable ? "Update" : "Complete"}
        </button>
        <button
          onClick={() => dispatch(DeleteTodo(todo.id))}
          className={styles.deleteBtn}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
