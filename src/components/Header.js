import { IoApps } from 'react-icons/io5';

import Profile from '../img/profile.jpeg';

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="#">Gmail</a>{' '}
          </li>
          <li>
            <a href="#">Görseller</a>{' '}
          </li>
          <li>
            <a href="#">
              <IoApps className="appsIcon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Profile} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
