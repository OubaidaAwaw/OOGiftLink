  // import components from react router
import { Link } from "react-router-dom"
export default function HeaderButtons() {
  const isLoggedIn = !!localStorage.getItem("authToken");
  const LogoutHanlder = () => {
    console.log("Logout Hanlder")
  }
  return (
    <div className="listContainer row centerRow gap10">
      {isLoggedIn?
        <>
          <Link to={"/GiftLink/Login"} className="button center headerButton">Login</Link>
          <Link to={"/GiftLink/Register"} className="button center headerButton">Register</Link>
        </>
        :
        <button onClick={LogoutHanlder} type="button" className="button center headerButton">Logout</button>}
    </div>
  )
}
