

import {Users, Posts} from "./components";

import {useState} from "react";
import {userService} from "./services";

function App() {
    const [posts, setPosts] = useState([]);

    const getId = (userid) => {
      userService.getPosts(userid).then(({data})=> setPosts([...data]))
    }


  return (
    <div className="App">
      <Users getId={getId}/>
        <Posts posts={posts}/>
    </div>
  );
}

export default App;
