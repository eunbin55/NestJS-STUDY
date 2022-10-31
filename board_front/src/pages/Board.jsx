import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { BOARD_ALL } from '../graphql/board.gql';

const Board = () => {
  const {loading, data} = useQuery(BOARD_ALL);
  console.log(data);
  
  return (
    <>
      <h1 style={{textAlign:'center'}}>게시판</h1>
      {loading ? (
        <h3>loading...</h3>
      ) :  
      
      (
        <div>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
                <th>첨부파일</th>
              </tr>
            </thead>
          {data.boardAll.map((item, index) => (
            <tbody key={item.boardNum}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.userNum}</td>
                <td>{item.date}</td>
                <td>{item.cnt}</td>
                <td>{item.fileNum}</td>
              </tr>
            </tbody>
          ))}
          </table>
        </div>
      )
    }
    </>
  )
}

export default Board;