import React from 'react';
import Yaprak from '../img/yaprak.png';
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <span>Türkiye</span>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <a href="#">Hakkında</a>{' '}
          </li>
          <li>
            <a href="#">Reklam</a>
          </li>
          <li>
            <a href="#">İşletme</a>
          </li>
          <li>
            <a href="#">Arama nasıl çalışır?</a>
          </li>
        </ul>
        <a href="#" className="info">
          <img src={Yaprak} alt="" /> 2007'den bu yana karbon nötr
        </a>
        <ul>
          <li>
            <a href="#">Gizlilik</a>
          </li>
          <li>
            <a href="#">Şartlar</a>
          </li>
          <li>
            <a href="#">Ayarlar</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
