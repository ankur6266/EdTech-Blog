import './write.css'

export default function Write() {
  return (
    <div className='write'>
    <img className='writeImage' src='https://c4.wallpaperflare.com/wallpaper/971/357/259/starry-nigth-stars-night-sky-wallpaper-preview.jpg' 
    alt='' />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file' id='fileInput' style={{display: 'none'}}/>
                <input className='writeInput' type='text' placeholder='Title' autoFocus/>
            </div>
            <div className='writeFormGroup'>
                <textarea 
                placeholder='Start writing here...' typeof='text' 
                className='writeInput wrtieText'>
                </textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
