import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { USER_ALL, USER_CHECK } from "../graphql/user.gql";

const Login = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const {data} = useQuery(USER_CHECK);
    console.log('data>>>',data);
    
    console.log('inputId',inputId)
    console.log('inputPw',inputPw)
    function userCheck () {
        
    }
    
    
    return (
        <form onSubmit={userCheck}>
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