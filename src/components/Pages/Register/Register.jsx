import { Link } from 'react-router-dom'
import './register.css'
export default function Register() {
  return (
    <div className='register'>
        
        <form className='registerForm'>
        <span className='registerTitle'>Register</span>
            <label>Username</label>
            <input className='registerInput' placeholder='Enter Name' />
            <label>Email</label>
            <input className='registerInput' type='email' placeholder='Enter Email '/>
            <label>Password</label>
            <input className='registerInput' type='password' placeholder='Enter Password '/>
            <label>Date Of Birth</label>
            <input className='registerInput' type='date' />
        <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to='/login'>Login ?</Link>
        </button>
    </div>
  )
}
