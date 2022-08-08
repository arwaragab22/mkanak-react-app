import React from 'react'
import { posts} from "../data";
import Card from '../components/card';
function Home() {
  return (
      <div class="home">{posts.map((item,id) => {
          return <Card data={item} />
      }) }
      
      </div>
  )
}

export default Home