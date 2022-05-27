import React from "react";
import styled from 'styled-components';

const TodoStyle = styled.div`
.toDo{
    display:flex;
    align-items: center;
    margin-bottom:10px;
    heght:35px;
}

.toDo:last-child{
    margin-bottom:0;
}

.Checking{
    margin-right: 10px;
}

.Whattodo{
    flex:1;
}

.Delete{
    border:none;
    border-radius:0;
    height: 30px;
    width: 30px;
    background-color : #d9d9d9;
    color : #ffffff;
    font-size: 20px;
    margin: 3px;
    
}

.Delete:hover{
    background-color : #ff7a7a;
    cursor:pointer;
}


.WhattodoCheck{
    text-decoration: line-through;
}
`






function Todo({todoItem, todoList, setTodoList,isDel}){ //리스트에서 전달받기

    function isCheck(){
        const nextTodoList = todoList.map((item) => ({
            ...item, //맵으로 항목 가져다 주기
            checked: item.id === todoItem.id ? !item.checked : item.checked, //id값이 같은 항목의 체크 값을 토글 
          }));
      
          setTodoList(nextTodoList);
    };


    return(
        <TodoStyle>
        <li className="toDo">
            <input className="Checking" type="checkbox"
                checked={todoItem.checked}
                onChange={isCheck}
            />
            <span
             className={`Whattodo ${
                todoItem.checked ? 'WhattodoCheck' : '' //체크면 클래스네임 바꿔주고 스타일 따로 적용
              }`}
            >{todoItem.text}</span>
            <button className="Delete"
                deleted={todoItem.deleted}
                onClick={isDel}
            >-</button>
        </li>
        </TodoStyle>
    );
}
export default Todo;
