import { gql } from "@apollo/client";

// 유저 조회 
export const USER_ONE = gql`
query userOne($userId:String) {
  userOne(userOneInput:{
    userId:$userId
  }){
    userNum
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