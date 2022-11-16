import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH } from "../graphql/board.gql";

export const BoardTable = (board, searchWord, checkSearch) => {
  const navigate = useNavigate();
  const boardList = board.board;
  const formatDate = new Date(boardList.date);

  const { data: search } = useQuery(SEARCH, {
    variables: { searchWord: searchWord },
  });
  return (
    <>
      {checkSearch ? (
        <div>{search?.search.boardNum}</div>
      ) : (
        <tbody className="boardData" key={boardList.boardNum}>
          <tr onClick={() => navigate(`/detail/${boardList.boardNum}`)}>
            <td>{board.index + 1}</td>
            <td>{boardList.title}</td>
            <td>{boardList.user.userName}</td>
            <td>{formatDate.toLocaleString()}</td>
            {/* <td>{boardList.cnt}</td>
          <td>{boardList.fileNum}</td> */}
          </tr>
        </tbody>
      )}
    </>
  );
};
