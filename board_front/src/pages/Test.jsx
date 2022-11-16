import React, { useCallback, useState } from "react";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/react-hooks";
import Login from "./Login";
import { SEARCH } from "../graphql/board.gql";

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

// 멤버 전체 목록 조회
export const USER_ALL = gql`
  query UserAll {
    userAll {
      userNum
      userId
      userPw
      userName
      deptName
    }
  }
`;

// 유저 아이디(userId) 조회
export const USER_CHECK = gql`
  mutation UserCheck($userId: String!) {
    userCheck(userId: $userId) {
      userId
    }
  }
`;

const Test = () => {
  const [inputId, setInputId] = useState("");
  const [login] = useMutation(USER_CHECK, { variables: { inputId } });
  const [searchWord, setSearchWord] = useState("");
  console.log(inputId);

  function onSubmit(e) {
    e.preventDefault();
    console.log(e.target.inputId.value);
    const loginId = login({ variables: { inputId } });
    setInputId("");
    console.log(loginId);
  }

  const { data: search } = useQuery(SEARCH, {
    variables: { searchWord: searchWord },
  });

  const Search = () => {
    console.log(search);
    console.log("searchWord====", searchWord);
  };
  // const [
  //   idCheck, {data}
  // ] = useLazyQuery(USER_ALL);
  // const searchText = (text: string) => {
  //   console.log(text);
  //   idCheck();
  // };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="inputId"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button>로그인</button>
      </form>
      {/* 검색 */}
      <div className="search">
        <input
          type="text"
          value={searchWord}
          placeholder="검색어를 입력하세요"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={Search}>검색</button>
      </div>
      {search.search.map((item) => {
        return <div>{item.boardNum}</div>;
      })}
    </>
  );

  // const {loading, data} = useQuery(BOARD_ALL);
  // // console.log(data);
  // if (loading) return <h3>loading...</h3>;

  // return (
  //   <>
  //     {data.boardAll.map((item:any) => (
  //       <div key={item.uId_board}>
  //         {`${item.title}:${item.mName}`}
  //         {item.date}
  //       </div>
  //     ))
  //     }
  // </>
  // )
};

export default Test;
