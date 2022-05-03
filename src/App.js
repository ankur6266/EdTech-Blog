
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Settings from "./components/Pages/settings/Settings";
import Single from "./components/Pages/single/Single";
import Write from "./components/Pages/write/Write";


function App() {
  return(
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      <Register />
    </div>
  )
}

export default App;