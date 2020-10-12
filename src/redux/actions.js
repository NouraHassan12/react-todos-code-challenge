 export const DAA_TODO ="DAA_TODO";
 export const DELETE_TODO = "DELETE_TODO";
 export const UPDATE_TODO ="UPDATE_TODO";

export function addTodo(todo){
    return{
        type:DAA_TODO,
        payload:todo
    }
}



export function DeleteTodo(todoId){
    return{
        type:DELETE_TODO,
        payload:todoId
    }
}

export function UpdateTodo(todo){
    return{
        type:UPDATE_TODO,
        payload:todo
    }
}