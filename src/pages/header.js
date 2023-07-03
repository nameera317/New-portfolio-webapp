import { NavLink } from 'react-router-dom';
import './header.css'

function Header(){
 
  const activeLink = (e) => {
    document.querySelectorAll('.list').forEach((items) =>
    items.classList.remove('active'));
      e.target.parentNode.parentNode.parentNode.classList.add('active')

    }
    return(
  <div className="header">
   <div className='nav'>
    <ul>
      <li className='list active' id="1" onClick={activeLink}>
      <NavLink className='a' to='/home'>
      <span className='icon'><i className="fa-solid fa-house"></i></span>
      <span className='item'>Home</span>
      </NavLink> 
      </li>
      <li className='list' id="2" onClick={activeLink}>
      <NavLink className='a' to='/about'>
      <span className='icon'><i className="fa-solid fa-user"></i></span>
      <span className='item'>About</span>
      </NavLink> 
      </li>
      <li className='list' id="3" onClick={activeLink}>
      <NavLink className='a' to='/resume'>
      <span className='icon'><i className="fa-solid fa-file"></i></span>
      <span className='item'>Resume</span>
      </NavLink> 
      </li>
      <li className='list'  id="4" onClick={activeLink}>
      <NavLink className='a' to='/skill'>
      <span className='icon'><i className="fas fa-cogs"></i></span>
      <span className='item'>Skill</span>
      </NavLink> 
      </li>
      <li className='list'  id="5" onClick={activeLink}>
      <NavLink className='a' to='/project'>
      <span className='icon'><i className="fa-sharp fa-solid fa-list-check"></i></span>
      <span className='item'>Project</span>
      </NavLink> 
      </li>
      <div className='indi'></div>
    </ul>
   </div>
   <a href='https://www.linkedin.com/in/nameera-saifi-63a064235/'>
         <i id="link" className="fa-brands fa-linkedin"></i>
         </a>
  </div>
     
    )
  }
  
  export default Header;