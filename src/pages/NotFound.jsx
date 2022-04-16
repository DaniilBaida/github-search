import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound(props) {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8  text-white">Oops!</h1>
          <p className="text-5xl mb-8  text-white"> 404 - Page not found!</p>
          <Link
            to="/"
            className="btn btn-primary text-white  shadow-lg fill-gray-300 "
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
