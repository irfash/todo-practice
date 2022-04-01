import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Dispatch } from "redux";
import "./App.css";
// import "../src/components/item/Item.css"
import { useAppSelector } from "./app/hooks";
import { Item } from "./components/item/Item.components";
import { add, selectOne, selectState, selectThree, selectTodo, selectTwo} from "./features/todo/todoSlice";
import { hasString } from "./utils";
//  (e)=>{e.preventDefault();dispatch(add({title:"irfash",desc:"df",sub:"one"}));
function App() {
  const dispatch:Dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description,setDescription] = useState<string>("");
 
 
 
 
 
  const handelSubmit= (e:FormEvent) => {
    e.preventDefault();
    dispatch(add({title,description,sub:"one"}));
    setTitle("");
    setDescription("");
  } 
  const todo = useAppSelector(selectTodo);
 
  
  
  

  return (
    <div className="App">
      <form className="Input" onSubmit={(e)=>handelSubmit(e)}>
        <input
         style={{borderRadius:hasString(title)?"12px 12px 0px 0px":"12px"}}
          placeholder="todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {hasString(title) && 
        <>
        <button type="submit">
          +
        </button>
        </>}
        {hasString(title) && (
          <ReactTextareaAutosize
            
            placeholder="Whta's that...."
            minRows={2}
            maxRows={10}
            className="DescFeald"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
        )}</form>
        <div className="content">
        {
        Object.keys(todo).map((itemName,i)=>{
            const item = todo[itemName];
          // console.log(todo[item]);
          return <div key={i} className={itemName}>
            {itemName}
            <Item  item={item} />
         </div>
         })} 
         
    
      </div>
      <div className="Notes">notes</div>
    </div>
  );
}

export default App;
