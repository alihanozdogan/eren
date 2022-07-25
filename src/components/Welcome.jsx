import React from 'react'
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className='App'>
      <div className='main-page-img' />
      <div className='main-page-header'>
        <div id='kantin-logo' />
        <div className='main-page-desc'>
          <h1 className='main-title'>BAUM | Kantin Uygulamasi</h1>
          <p className='main-desc'>Giriş yaparak BAUM kantin ürünlerine ulaşabilirsiniz.</p>
        </div>
        <div className='btn-group'>
          <Link className="link-btn" to="/kayit-ol">Kayit ol</Link>
          <Link className="link-btn" to="/giris-yap">Giris yap</Link>
        </div>
      </div>
    </div>
  )
}