import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostContain'>
            <img src='https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png'
                alt=''
                className='singlePostImage'
            />
            <h2 className='singlePostTitle'>
                Title Of The Blog
                <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h2>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>
                    Author: <b>John</b>
                </span>
                <span className='singlePostDate'>2 hour ago</span>
                </div>
                <p className='singlePostDesc'>Pariatur Ut do irure quis irure commodo proident veniam nulla. Deserunt commodo exercitation ad anim anim fugiat incididunt qui fugiat id laborum. Enim in eu fugiat culpa ipsum id.
                Culpa sit pariatur labore consectetur fugiat proident qui mollit velit sint. Cupidatat laboris excepteur ut ad eiusmod ea sunt. Tempor nostrud et Lorem magna sit consequat incididunt ad Lorem ex elit incididunt ullamco.
                Veniam duis pariatur eu incididunt. Exercitation quis consequat occaecat aute aute est ea labore amet dolore. Officia enim et nostrud ut quis nostrud laborum aliqua. Ut reprehenderit ad sit eu. Velit cupidatat nisi labore incididunt pariatur non consectetur ea.
                Ut labore consequat qui duis commodo incididunt culpa laborum irure esse. Veniam laboris cupidatat tempor est aliquip adipisicing ut sunt Lorem deserunt. Occaecat dolor est officia aute mollit nulla magna exercitation laboris.
                </p>
            
        </div>
    </div>
  )
}
