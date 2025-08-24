import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSocket } from '../../SocketProvider'
import { useNavigate } from 'react-router';
import VotingButton from '../../components/VotingButton/VotingButton';

const Voting = () => {

  useEffect(() => {
  }, [])

  return (
    <>
        <VotingButton type={"favor"}></VotingButton>
    </>
  )
}

export default Voting
