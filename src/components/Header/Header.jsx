import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <span className='smHeaderTitle'>React & Node</span>
            <span className='lgHeaderTitle'>Blog</span>
        </div>
        <img className='headerImg' alt='heading background'
        src='https://media.istockphoto.com/photos/home-office-desk-table-with-coffee-cup-bouquet-of-spring-flowers-lily-picture-id1310455436?b=1&k=20&m=1310455436&s=170667a&w=0&h=chdh2N8T_Gk7D2-dOcUTT_YjS4B4eKNl98cgSK6nuzg='/>
    </div>
  )
}
