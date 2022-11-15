import { useQuery } from "@apollo/react-hooks";
import { USER_ONE } from "../graphql/user.gql";
import React, { useEffect } from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { BoardCreate } from "../pages/BoardCreate";

export const UserOne = (loginUserId) => {
  const { loading, error, data } = useQuery(USER_ONE, {
    variables: {
      userId: loginUserId,
    },
  });
  console.log("loginUserId===", loginUserId);
  console.log(data);
  useEffect(() => {
    if (!loading && !error) {
      console.log(data.userOne.userNum);
    }
  }, [data, error, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return <BoardCreate loginUserInfo={data.userOne} />;
};
