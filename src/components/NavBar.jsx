import '../assets/style/App.css'
import {HashLink as Link} from 'react-router-hash-link';
import {BrowserRouter} from 'react-router-dom';
import Services from './Services';
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar () {
  return (
    <BrowserRouter >
      <div className="navbar"> 
        <AnchorLink href='#home' className='nav-button'>
          <button className='nav-button'>
            Home
          </button>
        </AnchorLink>
        <AnchorLink href='#services'>
          <button className='nav-button'>Services</button>
        </AnchorLink>
        <AnchorLink href='/works' className='nav-button'>
          <button className='nav-button'>
            Works
          </button>
        </AnchorLink>
        <AnchorLink href='/contacts' className='nav-button'>
          <button className='nav-button'>
            Contacts
          </button>
        </AnchorLink>
      </div>
    </BrowserRouter>
  )
}
export default NavBar;