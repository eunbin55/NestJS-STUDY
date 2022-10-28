import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MEMBER_ALL } from "../graphql/member.gql";

const Login = () => {
    const {data} = useQuery(MEMBER_ALL);
    console.log(data);
    const [id, setId] = useState('');
    const [value, setValue] = useState('')
    function idCheck () {
        const mId = data.memberAll[0].map((item:any) => (item.mId))
        if(`${setId}` === mId ){
            alert(mId);
        } else {
            alert("로그인 실패");
        }
        
    }

    const targetValue = (e:any) => {
        setValue(e.target.value)
        // const a =e.target.value
        // console.log(a)
    }

    console.log(data?.memberAll[0].mId);
            return (
                
                <div>
            <Form  onClick={idCheck}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="id" placeholder="아이디를 입력하세요" 
                         onInput={(e:any) => setId(e.target.value) } 
                        onClick={targetValue}/>
                    <Form.Text className="text-muted" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    LOGIN
                </Button>
            </Form>
        </div>
    )
}

export default Login;