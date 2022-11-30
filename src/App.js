import React, {useEffect, useState} from 'react';

import axios from 'axios';


const App = ()=>{

  const [posts, setPosts] = useState([])


 // real access to your application on local
  useEffect(()=>{
    // Wordpress fecthing
    axios
      .get('http://localhost/wordpress7sem/wp-json/wp/v2/posts?_embed')
      .then((res)=>setPosts(res.data));
    
  }, [])



  const postsJsx = posts.map((post)=>(
    // rely on wordpress as an API with dangerously and the __html
    <li key={post.id} dangerouslySetInnerHTML={{__html:post.content.rendered}}></li>
  ));


  return(
    <div>
      <section>
        <h1>Wordpress</h1>
        <ul>{postsJsx}</ul>
      </section>
    </div>
  )

};


export default App;