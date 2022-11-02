import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { BOARD_ALL } from '../graphql/board.gql';
import { Pagenation } from '../components/Pagenation';

const Board = () => {
  const {loading, data} = useQuery(BOARD_ALL);
  // console.log(data);
  
  const [limit, setLimit] = useState(5); //페이지당 게시물 제한 수
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <>
      <h1>게시판</h1>
      {loading ? (
        <h3>loading...</h3>
      ) :  
      
      (
      <div >
        <div className='pageNagion'>
          게시글 수:
          <select type='number'
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value='5'>5</option>
            <option>10</option>
          </select>
        </div>
        <div className='search' >
          <input  placeholder='검색어를 입력하세요' />
          <button >검색</button>
        </div>
        <table >
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
          {/* {data.boardAll.map((item) => (
            item.title
          ))} */}
        {data.boardAll.slice(offset, offset + limit).map((item, index) => (
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
        <Pagenation 
          total={data.boardAll.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
      )
    }
    </>
  )
}

export default Board;