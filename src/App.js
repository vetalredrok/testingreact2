

import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

import {useState} from "react";
import {userService} from "./services";

function App() {
    const [posts, setPosts] = useState([]);

    const getUserId = (id) =>{

            userService.getPosts(id).then(({data}) => {
                setPosts([...data])
                console.log(posts, data)
            })


    }


  return (
    <div className="App">
      <Users getUserId={getUserId}/>
        <Posts posts={posts}/>
    </div>
  );
}

export default App;
