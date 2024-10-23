import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const {headerInfo} = props
  const {header, path} = headerInfo
  return (
    <li className="list">
      <Link to={path} className="header-item">
        {header}
      </Link>
    </li>
  )
}

export default Header