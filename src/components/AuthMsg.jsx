import React from 'react'
import { Link } from "react-router-dom";

export default function MsgModal({icon, title, msg}) {
  return (
    <div className='auth-msg'>
      <div className='icon'>{icon}</div>
      <h3>{title}</h3>
      <p>{msg}</p>
      <button className='go-back-home'>
        <Link to="/">Ana Sayfaya gitmek için tıklatın.</Link>
      </button>
  </div>
  )
}