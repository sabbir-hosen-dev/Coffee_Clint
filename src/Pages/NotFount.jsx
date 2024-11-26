import error from "../assets/images/404/404.gif"

function NotFound() {
  return (
    <div className="relative">
      <img src={error} alt="" />
    </div>
  )
}

export default NotFound
