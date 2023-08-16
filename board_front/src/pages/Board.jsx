import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOARD_ALL, SEARCH } from "../graphql/board.gql";
import { Pagenation } from "../components/Pagenation";
import { BoardTable } from "../components/BoardTable";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [limit, setLimit] = useState(5); //페이지당 게시물 제한 수
  const [currentPage, setCurrentPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const [searchData, setSearchData] = useState(false);
  const offset = (currentPage - 1) * limit; //현재 페이지 전까지의 게시물 수

  const { loading, error, data } = useQuery(BOARD_ALL, {
    variables: { currentPage: currentPage, limit: limit },
  });
  const { data: search } = useQuery(SEARCH, {
    variables: { searchWord: searchWord },
  });
  const navigate = useNavigate();

  // console.log("searchWord====", searchWord);

  const Search = (e) => {
    if (search.search.length === 0) {
      // console.log("검색결과가 없습니다");
      alert("검색결과가 없습니다");
      setSearchData(false);
    } else {
      console.log(search.search);
      setSearchData(true);
    }
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      Search();
    }
  };

  const Logout = () => {
    sessionStorage.clear();
    console.log("로그아웃sessionStorage===", sessionStorage);
    navigate("/login");
  };

  useEffect(() => {
    if (!loading) {
    }
    if (search) {
    }
  }, [searchWord, loading, search]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="boardMain">
      <button onClick={Logout}>로그아웃</button>
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
            <option value="15">15</option>
          </select>
        </div>
        {/* 검색 */}
        <div className="search">
          <input
            type="text"
            value={searchWord}
            placeholder="검색어를 입력하세요"
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyPress={onKeyPress}
          />
          <button onClick={Search}>검색</button>
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
            </tr>
          </thead>
          {searchData
            ? search?.search.map((search, index) => (
                <BoardTable
                  board={search}
                  index={index}
                  key={search.boardNum}
                />
              ))
            : data.boardAll.slice(offset, offset + limit).map((item, index) => {
                return (
                  <BoardTable
                    board={item}
                    index={index}
                    key={item.boardNum}
                    // searchWord={searchWord}
                  />
                );
              })}
        </table>
        {/* 페이지네이션 */}
        {searchData ? null : (
          <Pagenation
            total={data.boardAll.length}
            // total={totalCount}
            limit={limit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <button onClick={() => navigate("/boardCreate")}>글작성</button>
      </div>
    </div>
  );
};

export default Board;
