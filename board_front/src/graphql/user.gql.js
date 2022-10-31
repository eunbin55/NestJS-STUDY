import { gql } from "@apollo/client";

// 멤버 전체 목록 조회 
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