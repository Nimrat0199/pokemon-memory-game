import React, { useContext } from "react";


const TodoContext = React.createContext({
    Todos:[
        {
            id:1,
            todo: "todo msg",
            completed: false
        }
    ]
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext)
}

export default TodoProvider= TodoContext.Provider;