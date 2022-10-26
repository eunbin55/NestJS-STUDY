import { gql } from "@apollo/client";

// 게시판 전체 목록 조회 
export const BOARD_ALL = gql`
query BoardAll {
    boardAll {
        uId_board
        title
        mName
        contents
        date
        cnt
    }
}
`;