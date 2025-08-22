import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSocket } from '../../SocketProvider'
import QRScanner from '../../components/QRScanner/QRScanner';
import { useNavigate } from 'react-router';

const QR = () => {
  useEffect(() => {
  }, [])

  return (
    <>
        <QRScanner></QRScanner>
    </>
  )
}

export default QR
