import React from 'react'
import { Link } from 'react-router-dom';

export default function WebpageError({code, msg}) {
  return (
    <div className='App'>
      <div className='webpage-error'>
        <h1 className='error-code'>{code}</h1>
        <p className='error-desc'>{msg}</p>
        <div className='go-back-home'>
          <Link to="/">Ana sayfaya dönmek için tıklat!</Link>
        </div>
      </div>
    </div>
  )
}