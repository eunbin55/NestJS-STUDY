import React from 'react'
import Table from 'react-bootstrap/Table';
import { useQuery } from '@apollo/react-hooks';
import { BOARD_ALL } from '../graphql/board.gql';

const Board = () => {
  const {loading, data} = useQuery(BOARD_ALL);
  // console.log(data);
  
  return (
    <>
      {loading ? (
        <h3>loading...</h3>
      ) :  
      
      (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
      {data.boardAll.map((item:any, index:any) => (
        <tbody key={item.uId_board}>
          <tr>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.mName}</td>
            <td>{item.date}</td>
            <td>{item.cnt}</td>
          </tr>
        </tbody>
      ))}
      </Table>
      )
    }
    </>
  )
}

export default Board;