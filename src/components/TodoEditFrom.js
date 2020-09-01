import React, { useState, useEffect } from 'react';


function TodoEditFrom(props){
    const {value,handleEditSave} = props.allProps //解構

    const [editText , seteditText] = useState(value.text) 

    return <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-inline">
                    <input
                        type="text"
                        className="form-control mb2"
                        id="todoEdit"
                        value = {editText}
                        onChange={(e)=>{
                            seteditText(e.target.value)
                        }}
                    />
                    <button 
                        type="button"
                        className="btn btn-info mb2"
                        onClick={()=>{
                            handleEditSave(value.id,editText)
                        }}
                    >
                        修改
                    </button>

                </div>
            </li> 

}

export default TodoEditFrom;