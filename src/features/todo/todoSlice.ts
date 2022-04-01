import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import todo, { todofealds } from "../../interface";

let initialState: todo = {
      one :[
         {
            title:"begin",
            description:"Desc",
         },
         {
            title:"begin2",
            description:"Desc2",
          }
      ],
     two:[
         {
            title:"todoDoingTitle",
            description:"doingDesc",
         }  
      ],
      three:[
         {
            title:"todoDoneTitle",
            description:"doingDesc",
         }  
      ]
   };

export const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      add: (state, action:PayloadAction<any>)  => {
      const title:string = action.payload.title;
      const description:string = action.payload.description;
      const todo:todofealds = {title,description}
      // const result = [...state[action.payload.sub],todo];
      const res:todo ={
         ...state,
         [action.payload.sub]:[...state[action.payload.sub],todo]
      }   
      return res},
      changeState: (state, action: PayloadAction<todo> | string) => {
      },
      delete: (state, action: PayloadAction<todo>) => {
      }

   }
});

export const{add} = todoSlice.actions;
export const selectState = (state:RootStateOrAny)=>{
   Object.keys(state.todo).map((item)=>{console.log(item);
   })
   
   return state};
export const selectOne = (state:RootStateOrAny)=>state.todo.one;
export const selectTwo = (state:RootStateOrAny)=>state.todo.two;
export const selectThree= (state:RootStateOrAny)=>state.todo.three;
export const selectTodo = (state:RootStateOrAny)=>state.todo;
export default todoSlice.reducer;