import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "../App.css";
import Chatpage from "./chatpage";
import Updatepage from "./update-page";
import NoPage from "./NoPage";
 import Callspage from "./call-page";
import MsgPage from "./msg";
import Profile from "./Profile";
// import { useState } from "react";
export default function Routepage() {
 

  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Chatpage />} />
          <Route exact path="/" element={<Chatpage />}></Route>
          <Route exact path="/updates" element={<Updatepage />}/>
          <Route exact path="/calls" element={<Callspage />}></Route>
          <Route exact path="/msg" element={<MsgPage />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>

        <nav>
          <ul>
            
            <li>
              <NavLink to="/">Chats</NavLink>
            </li>
            <li>
              <NavLink to="/updates">Updates</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>


 <li>
              <NavLink to="/calls">Calls</NavLink>
            </li>



          </ul>
        </nav>
      </Router>
    </div>
  );
}
