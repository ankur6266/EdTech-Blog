import './sidebar.css'
import thumbnail from './images/thumbnail.jpg'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>ABOUT</span>
          <img alt='post thumbnail' src={thumbnail}/>
          <p>
            Anim duis nisi ullamco voluptate labore commodo ullamco elit. Consequat duis qui proident 
            cupidatat do anim incididunt eu. Duis sit excepteur nulla cillum laboris commodo fugiat
            ut quis eiusmod aliqua do et. Cillum id pariatur exercitation commodo mollit ut deserunt 
            veniam voluptate. Eu irure est eu velit incididunt ea non ex amet exercitation occaecat.
            Incididunt non consequat veniam tempor ullamco reprehenderit enim nulla ea consectetur 
            aliquip.
          </p>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>CATEGORIES</span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Technology</li>
            <li className='sidebarListItem'>Lifestyle</li>
            <li className='sidebarListItem'>Sports</li>
            <li className='sidebarListItem'>Travel</li>
            <li className='sidebarListItem'>Food</li>
            <li className='sidebarListItem'>Buisness</li>
            <li className='sidebarListItem'>Fashion</li>
            <li className='sidebarListItem'>News</li>
          </ul>
        </div>
        <div className='sidebarItem'>
          <div className='sidebarTitle'>FOLLOW US</div>
            <div className='sidebarSocial'>
              <i className="sidebarIcon fa-brands fa-instagram-square"></i>
              <i className="sidebarIcon fa-brands fa-facebook-square"></i>
              <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            </div>
        </div>
    </div>
  )
}
