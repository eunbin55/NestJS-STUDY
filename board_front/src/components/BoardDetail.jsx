import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BOARD_DELETE, BOARD_ONE } from "../graphql/board.gql";
import { BoardUpdate } from "../pages/BoardUpdate";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const BoardDetail = () => {
  const navigate = useNavigate();
  const { boardNum } = useParams();
  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: { boardSetNum: parseInt(boardNum) }, // boardNum을 int로 형변환
  });
  const [boardDelete] = useMutation(BOARD_DELETE, {
    variables: { boardSetNum: parseInt(boardNum) },
  });
  const DeleteRun = async () => {
    await boardDelete();
    alert("삭제되었습니다.");
    navigate("/board");
    window.location.reload();
  };

  useEffect(() => {
    if (!loading) {
      console.log(data.boardOne);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const formatDate = new Date(data.boardOne.date);
  return (
    <div className="boardDetail">
      <h1>게시글 상세</h1>
      <div className="boardOneData">
        <div>제목 :</div>
        <div>{data.boardOne.title} </div>
        <div>작성자 :</div>
        <div>{data.boardOne.user.userName} </div>
        <div>부서명</div>
        <div>{data.boardOne.user.department.deptName} </div>
        <div>작성일 :</div>
        <div>{formatDate.toLocaleString()} </div>
        <div>내용 :</div>
        <div>{data.boardOne.contents} </div>
      </div>
      {sessionStorage.getItem("inputId") === data.boardOne.user.userId ? (
        <div>
          <button onClick={() => navigate(`/detail/${boardNum}/update`)}>
            수정
          </button>
          <button onClick={DeleteRun}>삭제</button>
        </div>
      ) : null}
    </div>
  );
};
