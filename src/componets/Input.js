import React, {useEffect, useRef,useState} from "react"; //useStete()는 input에 입력한 값을 가져온다.
import styled from 'styled-components';

const InputBoxStyle = styled.div`
    .InputBox{
        display: flex;
        align-items: center;
        width: 100%;
    }

    .InputBoxIn{
        flex :1;
        border: 2px solid #f1f3f5;
        padding: 10px;
        height: 50px;
        box-sizing: border-box;
    }

    .InputBoxIn:focus{
        outline : none;
    }

    .addBtn{
        border: none;
        height : 50px;
        width : 50px;
        background-color: #f1f3f5;
        color: #1c7ed6;
        font-size: 20px;

    }

    .addBtn:hover{
        background-color: #ced4da;
        cursor:pointer;
    }
`



function Input({todoList, setTodoList}){ //부모 컴포넌트로 부터 받아옴

    const [text, setText] = useState(''); //빈 문자열 생성
    const inputRef = useRef(null); // useRef는 돔에 직접적으로 접근함
    function onChangeInput(e){ //인풋이 변하는 이벤트 발생 -> e.target에 있는 input으로 value값을 가져오는 메소드 생성
        setText(e.target.value);
    };
    

    //항목추가하는 함수
    function onAddBtn(){
        const next = todoList.concat({ //입력한 값을 리스트에 마지막에 추가, concat은 배열의 마지막 부분에 배열을 추가함
            id : todoList.length,//각 항목마다 아이디 넣고(배열 길이로)
            text,//이건 각 항목의 내용
            checked: false,
            deleted: false,
        });

        setTodoList(next); //입력한 항목 올려주기
        setText('');
        inputRef.current.focus(); //썼던 글씨 지우고 다시 포커싱
    };

    /*
    useEffect(()=>{
        console.log(todoList);

    },[todoList]);
    */

    return(
        <InputBoxStyle>
        <div className="InputBox">
            <input
            value={text} //value값
            ref={inputRef}//ref값
            className="InputBoxIn"
            placeholder="할 일을 입력하세요"
            onChange={onChangeInput} //인풋이 변하는 이벤트 발생하면 onChangeInput함수 실행
            />

            <button className="addBtn"
            onClick={onAddBtn} //클릭하면 onAddBtn함수 실행
            > + </button>
        </div>
        </InputBoxStyle>
    );
}

export default Input;
