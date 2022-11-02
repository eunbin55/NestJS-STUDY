import { gql } from "@apollo/client";

// 유저 전체 목록 조회 
export const USER_ALL = gql`
query UserAll {
    userAll {
        userNum
        userId
        userPw
        userName
        deptCode
    }
}
`;


// 유저 아이디(userId) 조회
export const USER_CHECK = gql`
mutation UserCheck($userInputId:String, $userInputPw:String){
    userCheck(loginInput:{
        userInputId:$userInputId
        userInputPw:$userInputPw
    })
}
`;