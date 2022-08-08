import React from "react";
import LogoutButton from "./logout.js";
import "./nav.css";
import LoginButton  from './login';
import Profile from './profile';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Nav() {
  const { isAuthenticated } = useAuth0();
    return <div class="nav">
      <div class="logo">mkanak</div>
        <ul>
          <Profile/>
        <LogoutButton />
        <LoginButton />

        {!isAuthenticated &&
          <Link to="sign">
            <button className="signup">signup</button>
          </Link>
        }
        </ul>

  </div>;
}

export default Nav;
