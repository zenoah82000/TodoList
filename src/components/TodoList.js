import React, { useState, useEffect } from 'react';

//components元件相關
import TodoItem from './TodoItem'  // 列表 > 一般樣式
import TodoEditFrom from './TodoEditFrom'  // 列表 > 編輯模式




function TodoList(props){
    const {todos,handleCompleted,handleDelete,handleEditToggle,handleEditSave}=props.allProps  

    return <>
      <div>
          <ul className="list-group">
              {todos.map((value,index)=>{
                 
                 if(value.edit){
                     return(
                        <TodoEditFrom
                            allProps={{value,handleEditSave}}
                        />
                     )
                 }else{
                    return(
                        <TodoItem
                            allProps={{value,handleCompleted,handleDelete,handleEditToggle}}
                        />
                    )
                 }
                  
              })}
          </ul>
      </div>
    </>

}

export default TodoList;