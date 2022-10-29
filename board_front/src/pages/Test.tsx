import React, { useCallback, useState } from 'react'
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';
import Login from './Login';

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

// 멤버 아이디(mId) 조회 
export const MEMBER_CHECK = gql`
mutation MemberCheck($mId: String!) {
    memberCheck(mId: $mId) {
      mId
  }
}
`;

const Test = () => {
  const [inputId, setInputId] = useState('');
  const [login] = useMutation(MEMBER_CHECK, {variables: {inputId}});
  console.log(inputId);

  function onSubmit(e:any) {
    e.preventDefault();
    console.log(e.target.inputId.value);
    const loginId = login({ variables: {inputId}});
    setInputId('');
    console.log(loginId);
  }
  // const [
  //   idCheck, {data}
  // ] = useLazyQuery(MEMBER_ALL);
  // const searchText = (text: string) => {
  //   console.log(text);
  //   idCheck();
  // };
  
    return (
      <form onSubmit={onSubmit}>
        <input type='text' name='inputId' value={inputId} onChange={(e) => setInputId(e.target.value)} />
        <button >로그인</button>
      </form>
    )

  
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
}

export default Test;