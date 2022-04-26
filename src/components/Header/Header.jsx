import './header.css'
import headerBg from '../../images/images.jpg'
export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <span className='smHeaderTitle'>React & Node</span>
            <span className='lgHeaderTitle'>Blog</span>
        </div>
        <img className='headerImg' alt='heading background'
        src={headerBg}/>
    </div>
  )
}
