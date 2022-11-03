import React from "react";
import { useNavigate } from "react-router-dom";

export const BoardTable = (board) => {
  const navigate = useNavigate();
  const boardList = board.board;
  //   console.log("board===========", board);
  //   console.log("board.board===========", board.board);
  return (
    <>
      <tbody key={boardList.boardNum}>
        <tr onClick={() => navigate(`/detail/${boardList.boardNum}`)}>
          {/* <tr onClick={()=> navigate(<BoardDetail num={boardList.boardNum}/>)}> */}
          <td>{board.index + 1}</td>
          <td>{boardList.title}</td>
          <td>{boardList.userNum}</td>
          <td>{boardList.date}</td>
          <td>{boardList.cnt}</td>
          <td>{boardList.fileNum}</td>
        </tr>
      </tbody>
    </>
  );
};
