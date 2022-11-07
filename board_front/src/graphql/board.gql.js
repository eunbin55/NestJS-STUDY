import { gql } from "@apollo/client";

// 게시판 전체 목록 조회 
export const BOARD_ALL = gql`
query boardAll($limit:Int!, $currentPage:Int!) {
    boardAll (boardAllInput:{
      limit:$limit
      currentPage:$currentPage
    }) {
      boardNum
      title
      userNum
      date
    
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

// 게시글 등록
export const BOARD_ADD = gql`
mutation boardAdd($title:String!, $contents:String!, $userNum:String!) {
  createBoard(createBoardInput:{
    title:$title
    contents:$contents
    userNum:$userNum
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