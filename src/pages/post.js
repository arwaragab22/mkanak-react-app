import React from 'react';
import { useLocation} from "react-router-dom"

function Post() {
    const location = useLocation();
    console.log(location.state)
  return (
      <div class="post">< div class="img">
          <img src={location.state.img} alt="" /></div>
          <h2>{location.state.title}</h2>
          <p>{location.state.desc}</p>
          <div>{location.state.longDesc}
</div>
          </div>
  )
}

export default Post