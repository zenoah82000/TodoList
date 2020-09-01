import React, { useState, useEffect } from 'react';


function TodoItem(props){

    const {value,handleCompleted,handleDelete,handleEditToggle} = props.allProps

    const date = new Date(value.id) //data = 本地標準時間.....
    const cssClass = value.completed?
    'list-group-item d-flex justify-content-between align-items-center list-group-item-dark'
    :'list-group-item d-flex justify-content-between align-items-center'

    

    return <li className={cssClass}>
                {value.text}

                {(value.completed)? '' :
                    <button 
                    className="btn btn-success" 
                    onClick={()=>{handleEditToggle(value.id)}}
                    >
                    編輯
                    </button>
                }


                <button 
                className="btn btn-info" 
                onClick={()=>{handleCompleted(value.id)}}>
                {value.completed?'取消完成':'完成工作'}
                </button>

                <button 
                className="btn btn-danger" 
                onClick={()=>{handleDelete(value.id)}}>
                刪除
                </button>

                <span className="badge badge-primary badge-pill">
                ⌚ {date.toLocaleString()}
                </span>
            </li> 

}

export default TodoItem;