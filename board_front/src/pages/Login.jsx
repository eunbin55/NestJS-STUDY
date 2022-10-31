import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { USER_ALL } from "../graphql/user.gql";

const Login = () => {
    const {data} = useQuery(USER_ALL);
    console.log(data);
    const [id, setId] = useState('');
    const [value, setValue] = useState('')
    function idCheck () {
        // const mId = data.userAll[0].map((item:any) => (item.mId))
        const userId = data.userAll[0].map((item) => (item.userId))
        if(`${setId}` === userId ){
            alert(userId);
        } else {
            alert("로그인 실패");
        }
        
    }

    return (
        <div>
            <div>ID</div>
            <input type="id" placeholder="아이디를 입력하세요" />
            <div>Password</div>
            <input type="password" placeholder="비밀번호를 입력하세요" />
            <button variant="primary" type="submit" >
                LOGIN
            </button>
        </div>
    )
}

export default Login;