import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'
import './home.css'
export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
    <Header />
    <div className='home'>
        <Posts posts = {posts}/>
        <Sidebar />
    </div>
    </>
  )
}
