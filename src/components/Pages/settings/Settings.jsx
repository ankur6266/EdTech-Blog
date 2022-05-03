import Sidebar from '../../Sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Account Info</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
              <label>Profile Picture</label>
              <div className='settingsPP'>
                <img alt=''
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGu8dYom1k4hFKWnlHPKwB-ovs1HkA2XCAvg&usqp=CAU'
                ></img>
                <label htmlFor='fileInput'>
                <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                </label>
                <input type='file' id='fileInput' hidden/>
              </div>
              <label>Username</label>
              <input type='text' placholder='abc'/>
              <label>Email</label>
              <input type='email' placholder='abc@gmail.com'/>
              <label>Password</label>
              <input type='password'/>
              <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
