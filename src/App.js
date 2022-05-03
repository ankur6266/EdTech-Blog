
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Settings from "./components/Pages/settings/Settings";
import Single from "./components/Pages/single/Single";
import Write from "./components/Pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Post from "./components/post/Post";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user = false;
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={user ? <Write/> :<Register />} />
        <Route path="/post/:postID" element={user ? <Settings/> :<Register />} />
      </Routes>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
    </Router>
  )
}

export default App;