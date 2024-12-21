  // impor css files
import "./Header.css"

  // import components
import HeaderButtons from "./HeaderButtons/HeaderButtons.jsx"
import Links from "./Links/Links"
import HeaderLogo from "./HeaderLogo/HeaderLogo"

export default function Header() {
  return (
    <header className="headerContainer around row centerRow">
      <HeaderLogo/>
      <Links/>
      <HeaderButtons/>
    </header>
  )
}
