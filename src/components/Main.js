import GoogleLogo from '../img/google-logo.png';
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardVoice, MdKeyboard } from 'react-icons/md';
import Button from './Button';

function Main() {
  return (
    <div className="main">
      <div className="container">
        <img src={GoogleLogo} alt="Google Logo" className="logo" />
        <div className="search">
          <div className="search-box">
            <IoSearchSharp className="search-icon" />
            <input type="text" />
            <MdKeyboard className="icons" />
            <MdKeyboardVoice className="icons" />
          </div>
          <div className="buttons">
            <Button text="Google'da Ara" />
            <Button text="Kendimi Şanslı Hissediyorum" />
          </div>
          <div className="language">
            Google'ı kullanabileceğiniz diğer diller: <a href="#">English</a>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
