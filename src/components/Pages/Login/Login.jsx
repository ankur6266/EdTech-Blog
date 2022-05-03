import { Link } from 'react-router-dom'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        
        <form className='loginForm'>
        <span className='loginTitle'>Login</span>
            <label>Email</label>
            <input className='loginInput' type='email' placeholder='Enter Email '/>
            <label>Password</label>
            <input className='loginInput' type='password' placeholder='Enter Password '/>
        <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to='/register'>Register ?</Link>
        </button>
    </div>
  )
}
