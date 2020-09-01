import React, { useState, useEffect } from 'react';
import { Button,Form } from 'react-bootstrap';


//components元件相關
import MainContent from './components/MainContent'  // 主外框+標題
import TodoAddFrom from './components/TodoAddFrom'  // 輸入框+按鈕
import TodoList from './components/TodoList'  // 顯示列+內部完成按鈕


function App(props) {
    // const [ todos , settodos ] = useState(['買牛奶','買手機'])
    const [ todos , settodos ] = useState([
        { id: 1591256594282, text: '買牛奶', completed: false , edit:false },
        { id: 1591256594281, text: '買iphone', completed: false , edit:false },
        { id: 1591256594283, text: '學react', completed: false , edit:false },
    ])
    const [ text ,settext] = useState('') //將輸入框中值暫時放入


    //執行改變completed是否完成方法
    const handleCompleted = (id)=>{
        const newtodos = [...todos] //複製原本內容
        const findItem = newtodos.findIndex((v,i)=>v.id === id) //找出該id在第幾項
        console.log(findItem)
        newtodos[findItem].completed =!newtodos[findItem].completed //該項內容修改
        settodos(newtodos) //重新給予
    }

    //執行Delete刪除方法
    const handleDelete = (id)=>{
        const newtodos = todos.filter((v,i)=>v.id !== id) //newtodos=原資料扣除指定id項
        console.log(newtodos)
        settodos(newtodos) //重新給予
    }

    //點擊編輯鈕,切換edit狀態
    const handleEditToggle = (id)=>{
        const newtodos = [...todos] //複製原本內容
        const findItem = newtodos.findIndex((v,i)=>v.id === id) //找出該id在第幾項
        if(findItem !== -1){  
            //如果有找到該項把裡面的edit值更改
            newtodos[findItem].edit = !newtodos[findItem].edit
            settodos(newtodos) //重新給予
        }
    }

    //編輯模式下修改該項值
    const handleEditSave = (id,text)=>{
        const newtodos = [...todos] //複製原本內容
        const findItem = newtodos.findIndex((v,i)=>v.id === id) //找出該id在第幾項
        if(findItem !== -1){  
            newtodos[findItem].text = text //修改內容
            settodos(newtodos)//重新給予
        }
        handleEditToggle(id) //把編輯模式關起來
    }


    return (
        <>
            <MainContent title="TodoList 待辦事項">  {/* 主外框+標題 */}

                {/* 輸入框+按鈕 */}
                <TodoAddFrom  
                    allProps={{text,settext,todos,settodos}} //集中在一個allProps
                />
                <br/>
                {/* 顯示列+內部完成按鈕 */}
                <TodoList
                    allProps={{todos,settodos,handleCompleted,handleDelete,handleEditToggle,handleEditSave}}
                />

            </MainContent>
    </>
);
}

export default App;
