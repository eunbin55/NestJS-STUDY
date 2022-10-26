import React from 'react'
import Table from 'react-bootstrap/Table';
import { gql, useQuery } from '@apollo/react-hooks';

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

const Test = () => {
  const {loading, data} = useQuery(BOARD_ALL);
  console.log(data);
  if (loading) return <h3>loading...</h3>;

  return (
    <>
      {data.boardAll.map((item:any) => (
        <div key={item.uId_board}>
          {`${item.title}:${item.mName}`}
        </div>
      ))
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
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

export default Test;