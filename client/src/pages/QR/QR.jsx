import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSocket } from '../../SocketProvider'
import QRScanner from '../../components/QRScanner/QRScanner';
import { useNavigate } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const QR = () => {
  useEffect(() => {
  }, [])

  return (
    <>  
      <Navbar></Navbar>
      <QRScanner></QRScanner>
    </>
  )
}

export default QR
