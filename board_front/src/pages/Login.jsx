import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { USER_CHECK } from "../graphql/user.gql";
import Board from "./Board";
import Home from "./Home";

const Login = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    
    console.log('inputId',inputId)
    console.log('inputPw',inputPw)

    const { data } = useQuery(USER_CHECK, {
        variables: { userInputId:inputId, userInputPw:inputPw} ,
    });

    
    function UserCheck () {
        console.log('inputId:'+inputId,'inputPw:'+inputPw)
        console.log(data)
        if(data.userCheck === false || null ){
            console.log('로그인 실패!');
        }else {
            console.log('로그인 성공!');
        }
        
        alert(data.userCheck)
    }
    
    
    // console.log(data)
    
    return (
        <form onSubmit={UserCheck}>
            <div>ID</div>
            <input type="id" placeholder="아이디를 입력하세요" value={inputId} onChange={(e) => setInputId(e.target.value)} />
            <div>Password</div>
            <input type="password" placeholder="비밀번호를 입력하세요" value={inputPw} onChange={(e) => setInputPw(e.target.value)} />
            <button variant="primary" type="submit" >
                LOGIN
            </button>
        </form>
    )
}

export default Login;