import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BOARD_ONE, BOARD_UPDATE } from "../graphql/board.gql";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";

export const BoardUpdate = () => {
  const navigate = useNavigate();
  const { boardNum } = useParams();
  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: { boardSetNum: parseInt(boardNum) }, // boardNum을 int로 형변환
  });
  const [title, setTitle] = useState(data.boardOne.title);
  const [contents, setContents] = useState(data.boardOne.contents);

  const [boardUpdate] = useMutation(BOARD_UPDATE, {
    variables: {
      boardSetNum: parseInt(boardNum),
      title: title,
      contents: contents,
    },
  });
  const UpdateRun = async () => {
    if (!title || !contents) {
      alert("제목, 내용은 필수 입력 항목입니다.");
    } else {
      await boardUpdate();
      console.log(boardUpdate);
      alert("수정되었습니다.");
      navigate("/board");
      window.location.reload();
    }
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
      <h1>게시글 수정</h1>
      <div className="boardOneData">
        <div>제목 :</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>작성자 :</div>
        <div>{data.boardOne.user.userName} </div>
        <div>작성일 :</div>
        <div>{formatDate.toLocaleString()} </div>
        <div>내용 :</div>
        <textarea
          value={contents}
          rows="10"
          onChange={(e) => setContents(e.target.value)}
        />
      </div>
      <button onClick={UpdateRun}>수정</button>
    </div>
  );
};
