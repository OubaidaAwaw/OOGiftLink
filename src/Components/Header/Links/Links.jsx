  // import css files
import './Links.css'

  // import react router components
import {NavLink} from 'react-router-dom'
export default function Links() {
  return (
    <ul className="center gap20">
      <li><NavLink to={"/GiftLink"} end>Home</NavLink></li>
      <li><NavLink to={"/GiftLink/Gifts"}>Gifts</NavLink></li>
      <li><NavLink to={"/GiftLink/Account"}>Account</NavLink></li>
      <li><NavLink to={"/GiftLink/Search"}>Search</NavLink></li>
    </ul>
  )
}
