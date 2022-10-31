import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { USER_ALL } from "../graphql/user.gql";

const Login = () => {
    const {data} = useQuery(USER_ALL);
    console.log(data);
    const [loginId, setLoginId] = useState('');
    function onSubmit (e) {
        const userId = data.userAll.map((item, index) => (item.userId))
        console.log(userId[0]);
        console.log(loginId);
        if(`${loginId}` === userId[0] ){
            alert(userId);
        } else {
            alert('userId>>>>>>'+userId);
        }
        
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div>ID</div>
            <input type="id" placeholder="아이디를 입력하세요" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
            <div>Password</div>
            <input type="password" placeholder="비밀번호를 입력하세요" />
            <button variant="primary" type="submit" >
                LOGIN
            </button>
        </form>
    )
}

export default Login;