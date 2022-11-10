import React from "react";
import { useNavigate } from "react-router-dom";

export const BoardTable = (board) => {
  const navigate = useNavigate();
  const boardList = board.board;
  const formatDate = new Date(boardList.date);
  return (
    <>
      <tbody key={boardList.boardNum}>
        <tr onClick={() => navigate(`/detail/${boardList.boardNum}`)}>
          <td>{board.index + 1}</td>
          <td>{boardList.title}</td>
          <td>{boardList.userNum}</td>
          <td>{formatDate.toLocaleString()}</td>
          {/* <td>{boardList.cnt}</td>
          <td>{boardList.fileNum}</td> */}
        </tr>
      </tbody>
    </>
  );
};
