import { gql } from "@apollo/client";

// 멤버 전체 목록 조회 
export const MEMBER_ALL = gql`
query MemberAll {
    memberAll {
        uId_member
        mId
        mPw
        mName
        dName
    }
}
`;