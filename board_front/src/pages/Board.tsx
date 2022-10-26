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
        data.boardAll.map((item:any) => (
          <div key={item.uId_board}>
            {item.title}, {item.mName}, {item.contents}
          </div>
        ))
        )
      }
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
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Board;