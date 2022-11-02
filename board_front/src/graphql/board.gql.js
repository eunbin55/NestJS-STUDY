import { gql } from "@apollo/client";

// 게시판 전체 목록 조회 
export const BOARD_ALL = gql`
query BoardAll {
    boardAll {
        boardNum
        title
        contents
      userNum
        date
        cnt
      fileNum
    }
}
`;

// 게시판 상세 조회
export const BOARD_ONE = gql`
query boardOne($boardSetNum:Int) {
  boardOne (boardOneInput:{
    boardSetNum:$boardSetNum
  }){
  	 boardNum
    title
    contents
    userNum
    date
    cnt
    fileNum
  }
}
`;