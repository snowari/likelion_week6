import React,{useState} from "react";
import styled from 'styled-components';
import Input from "../componets/Input";
import TodoList from "../componets/TodoList";

const HomeStyle = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    max-width: 500px;

`



function Home(){

    const[todoList, setTodoList] = useState([]); //입력한 값을 담을 리스트 생성

    return (
    <HomeStyle>
    <div className="homeContainer">
        <Input todoList={todoList} setTodoList={setTodoList}/>
        <TodoList
            todoList={todoList}//리스트에 전달
            setTodoList={setTodoList}
        />
    </div>
    </HomeStyle>

    );//입력한 값을 위에서 만든 리스트에 담기위해서, input으로 넘겨준다
}

export default Home;