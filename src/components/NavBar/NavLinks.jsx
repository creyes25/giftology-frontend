import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

const NavLinks = ({ user, handleLogout, closeMobileMenu, isMobile }) => {
  const logOut = () => {
    handleLogout()
    isMobile && closeMobileMenu()
  }

  return (
    <>
      {user
        ? isMobile ?
          <ul>
            <Link to="/" onClick={() => isMobile && closeMobileMenu()}><li>HOME</li></Link>
            <Link to="/profiles" onClick={() => isMobile && closeMobileMenu()}><li>PROFILES</li></Link>
            <Link to="/wishlists" onClick={() => isMobile && closeMobileMenu()}><li>MY WISHLISTS</li></Link>
            <Link to="/friends" onClick={() => isMobile && closeMobileMenu()}><li>FRIENDS</li></Link>
            <Link to="" onClick={() => logOut()}><li>LOG OUT</li></Link>
            {/* <li><Link to="/changePassword">Change Password</Link></li> */}
          </ul >
          :
          <ul>
            <Link to="/" className={styles.logo}><img src="/gift2.png" alt="navbar logo" /></Link>
            <Link to="/profiles"><li>PROFILES</li></Link>
            <Link to="/wishlists"><li>MY WISHLISTS</li></Link>
            <Link to="/friends"><li>FRIENDS</li></Link>
            <Link to="" onClick={() => handleLogout()}><li>LOG OUT</li></Link>
          </ul>
        :
        <ul>
          <Link to="/login" onClick={() => isMobile && closeMobileMenu()}><li>LOG IN</li></Link>
          <Link to="/signup" onClick={() => isMobile && closeMobileMenu()}><li>SIGN UP</li></Link>
        </ul>
      }
    </>
  )
}

export default NavLinks