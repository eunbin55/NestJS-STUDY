import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOARD_ALL } from "../graphql/board.gql";
import { Pagenation } from "../components/Pagenation";
import { BoardTable } from "../components/BoardTable";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [limit, setLimit] = useState(5); //페이지당 게시물 제한 수
  const [currentPage, setCurrentPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const offset = (currentPage - 1) * limit; //현재 페이지 전까지의 게시물 수

  const { loading, error, data } = useQuery(BOARD_ALL, {
    variables: { currentPage: currentPage, limit: limit },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      console.log(data);
      // console.log(data.boardAll.length);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  // console.log("searchWord====", searchWord);

  const Search = () => {
    //   const title = data.boardAll.filter((item) => {
    //     console.log("title====", item.title);
    //     if (setSearchWord === title) {
    //       console.log("data.boardAll.title===", item.title);
    //     } else {
    //       console.log("F");
    //     }
    //   });
  };

  return (
    <div className="boardMain">
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
          <input
            type="text"
            value={searchWord}
            placeholder="검색어를 입력하세요"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <button onClick={Search}>검색</button>
        </div>
        {/* 게시글 목록 */}
        <table className="boardList">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              {/* <th>조회수</th>
              <th>첨부파일</th> */}
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
          // total={data.boardAll.length}
          total={20}
          limit={limit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <button onClick={() => navigate("/boardCreate")}>글작성</button>
      </div>
    </div>
  );
};

export default Board;
