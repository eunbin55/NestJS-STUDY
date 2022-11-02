import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { BOARD_ONE } from '../graphql/board.gql';

export const BoardDetail = () => {

    const {data} = useQuery(BOARD_ONE, {
      variables: {boardSetNum: 1},
    });
    console.log(data);
    
  return (

    <div>BoardDetail</div>
  )
}
