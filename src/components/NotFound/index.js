import Navbar from '../Navbar/index'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/defacaof3/image/upload/v1722574599/Group_7520_fst9nq.png"
        alt="not-found"
        className="not-found-img"
      />
      <h1 className="not-found-head">Page Not Found.</h1>
      <p className="not-found-para">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
