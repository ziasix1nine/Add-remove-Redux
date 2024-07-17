import {createSlice,nanoid} from "@reduxjs/toolkit"


const initialState = {

    todos: [{id:1,text : 'HELLO', completed : false}]
}

export const todoSlice = createSlice({

    name:'todo',
    initialState,
    reducers:{
        addToDo:(state,action)=>{

            const todo ={
                id:nanoid(),
                text:action.payload,
                completed: false
            }
         state.todos.push(todo)
        },

        removeTodo:(state,action)=>{

           state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload)
           }
        }
 
})

export const {addToDo,removeTodo} = todoSlice.actions

export default todoSlice.reducer