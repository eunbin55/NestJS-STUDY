import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOARD_ALL } from "../graphql/board.gql";
import { Pagenation } from "../components/Pagenation";
import { BoardTable } from "../components/BoardTable";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const { loading, error, data } = useQuery(BOARD_ALL);
  const [limit, setLimit] = useState(5); //페이지당 게시물 제한 수
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      // console.log(data.boardAll);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <h1>게시판</h1>
      <div>
        {/* 페이지 당 표시할 게시물 수 */}
        <div className="pageNagion">
          게시글 수:
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        {/* 검색 */}
        <div className="search">
          <input placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </div>
        {/* 게시글 목록 */}
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

          {data.boardAll.slice(offset, offset + limit).map((item, index) => {
            return (
              <BoardTable board={item} index={index} key={item.boardNum} />
            );
          })}
        </table>
        {/* 페이지네이션 */}
        <Pagenation
          total={data.boardAll.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
        <button onClick={() => navigate("/boardCreate")}>글작성</button>
      </div>
    </>
  );
};

export default Board;
