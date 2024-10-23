import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/index';
import './index.css';

const headerList = [
  {
    id: 1221,
    header: 'Home',
    path: '/',
  },
  {
    id: 1222,
    header: 'Reports',
    path: '/reports',
  },
];

const Navbar = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login');  // Use navigate to replace history.replace
  };

  return (
    <nav className="nav-bar">
      <h1 className="logo-head">Daily Mood Tracker</h1>
      <div className="header-part2">
        <ul className="header-list">
          {headerList.map(eachHeader => (
            <Header key={eachHeader.id} headerInfo={eachHeader} />
          ))}
        </ul>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
