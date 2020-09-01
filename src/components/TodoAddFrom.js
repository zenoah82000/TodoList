import React, { useState, useEffect } from 'react';
import { Button,Form } from 'react-bootstrap';



function TodoAddFrom(props){
    // console.log("props",props)
    const{text,settext,todos,settodos }=props.allProps //把props收到的資料解構出來

    return (
        <Form.Group controlId="formBasicEmail" className="d-flex">
            <Form.Control type="text" placeholder="請輸入文字" 
                style={{width:"90%"}} 
                placeholder="請輸入待辦事項，可直接Enter鍵 或 按鈕 送出"
                value={text} //用來讓提交後清空用
                onChange={
                    (e)=>{settext(e.target.value)}
                }
                onKeyPress={
                    (e)=>{
                        if(e.key === 'Enter' && e.target.value !== ''){
                            //建立新內容
                            const newTodoItem={
                                id:+new Date(),
                                text:text,
                                completed:false,
                                edit:false
                            }
                            //把新內容與舊資料組合
                            const newtodos = [newTodoItem,...todos] //把todos解包,新資料放在前面
                            settodos(newtodos)
                            settext('')
                        }
                }}
            />
            <Button variant="primary" type="button" style={{marginLeft:"10px"}} onClick={
                (e)=>{
                    if(text !== ''){
                        const newTodoItem={
                                id:+new Date(),
                                text:text,
                                completed:false,
                        }
                        const newtodos = [newTodoItem,...todos]
                        settodos(newtodos)
                        settext('')
                    }
                } 
            }>
                送出
            </Button>
        </Form.Group>


    );
}

export default TodoAddFrom;