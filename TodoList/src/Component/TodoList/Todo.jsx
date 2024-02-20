import { useState } from "react";

const Todo = () => {

  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [isUpdate, getIsUpdate] = useState(false);
  const [index, getIndex] = useState(0);
  const [editInput, getEditInput] = useState("");

  const handleInput = (event)=>{
      setInput(event.target.value);
  };
  const handleTodo = ()=>{
      if(input !== ""){
          setTodo([...todos, input]);
          setInput("");
      } else {
          alert("Input somthing!");
      }
  };
  const deleteBtn = (unique)=>{
      const filtered = todos.filter((del, ind)=> ind !== unique);
      setTodo(filtered);
  };
  const editBtn = (unique)=>{
      const findData = todos.find((value, index)=> index === unique);
      getEditInput(findData);
      getIndex(unique);
      getIsUpdate(true); // Problem in this line.
  }
  const handleUpdateChangedInput = (event)=>{
      getEditInput(event.target.value);
  }
  const handleUpdatedValue = ()=>{
    if(editInput !== ""){
      todos[index] = editInput;
      getIsUpdate(false);
    } else {
      alert("Pleae Input updated value!");
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-300 min-h-screen">
        <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
            <div className="input_text relative">
                <input onChange={handleInput} value={input} className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8" type="text" placeholder="Write a new task"/> 
                <button onClick={handleTodo} className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]">
                  Add todo
                </button> 
                <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i> 
            </div>
            <ul className="all_tasks">
                {todos.map((todo,index)=>(
                    isUpdate?
                    <div key={index} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <input onChange={handleUpdateChangedInput} type="text" value={editInput} className="text-sm h-12 my-4 pr-20 md:pr-28 outline-none"/>
                    <button onClick={()=>handleUpdatedValue(index)} className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24">Update</button>
                    </div>
                    :
                    <li key={index}>
                      <hr className="mt-2"/>
                      <div className="my-4 flex justify-between px-1">
                          <div className="flex items-center gap-2"> 
                              <span className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                                  <i id="checked1" className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"></i>
                              </span>
                              <p className="md:max-w-[375px] truncate max-w-[280px] ">
                                  <strike id="strike1" className="text-gray-600 text-sm no-underline ">{todo}</strike>
                              </p>
                          </div>
                          <span onClick={()=>editBtn(index)} className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                              <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
                          </span>
                          <span onClick={()=>deleteBtn(index)} className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                              <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
                          </span>
                      </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Todo;