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
      date
      cnt
      user{
        userNum
        userName
      }    
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
    user{
      userNum
      userId
      userName
      department{
        deptName
      }
    }
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
  }
}
`;

// 게시글 삭제
export const BOARD_DELETE = gql`
mutation($boardSetNum:Int!) {
  boardDelete(boardOneInput:{
    boardSetNum:$boardSetNum
  })
}
`;

// 게시글 수정
export const BOARD_UPDATE = gql`
mutation($boardSetNum:Int!,$title:String!,$contents:String!) {
  boardUpdate(boardUpdate:{
    boardSetNum:$boardSetNum
    data:{
      title:$title
      contents:$contents
    }
  })
}
`;

// 검색
export const SEARCH = gql`
query($searchWord:String!){
  search(search:{
    searchWord:$searchWord
  }){
    boardNum
    title
    contents
    date
    cnt
    user{
      userName
      userNum
      
    }
  }
}
`;
