import React from 'react'
import { useNavigate } from 'react-router-dom'

function Shows() {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(':id/:name')}>Shows</div>
  )
}

export default Shows