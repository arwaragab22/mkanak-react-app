import React from 'react'
import "./card.css";
import { Link } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
function Card(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(withAuthenticationRequired);
  return (
      <div class="card">
          
          <h2>{props.data.title}</h2>
          <div class="img">
              <img src={props.data.img} alt="" />
          </div>
          
          <p>{props.data.desc}</p>
          <Link to="post" state={props.data}>
        <button disabled={isAuthenticated ? false : true}>see more</button>

</Link>
       

    </div>
  )
}

export default Card