import React from "react";
import Todo from "./Todo";
import styled from 'styled-components';

const ListStyle= styled.div`
    .todolist{
        marging-top: 20px;
        display : flex;
        flex-direction: column;
    }

    h1{
        color : #495057;
        padding: 0px;
        border-bottom : 1px solid
        
    }

    .todolistUl{
        list-style: none;
        display: flex;
        flex-direction : column;
        justify-content: center;
        padding : 0px;
    }


`




function TodoList({todoList, setTodoList}){ //홈에서 전달받기

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', { //날짜전달받기
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });



        return(
        <ListStyle>
        <div className="todolist">
            <h1 className="todoDate">{dateString}</h1>
            <ul className="todolistUl">
                {todoList && todoList.map((todoItem)=>(
                    
                    <Todo
                     key={todoItem.id}
                     todoItem={todoItem}
                     todoList={todoList}
                     setTodoList={setTodoList}
                    />
                
                    
                )
                )
                }
            </ul>
        </div>
        </ListStyle>
        );
        
}

export default TodoList;