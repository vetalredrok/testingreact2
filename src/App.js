import {Link, Route, Routes} from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import UserDetailsV2 from "./components/userDetailsV2/UserDetailsV2";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postDetails/PostDetails";




function App() {
  return (
    <div className="App">

        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/users'}>all users page</Link></li>
            <li><Link to={'/posts'}>all posts page</Link></li>
        </ul>

        <hr/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'users'} element={<Users/>}/>
            <Route path={'users/:id'} element={<UserDetails/>}/>
            <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>
            <Route path={'posts'} element={<Posts/>}>
                <Route path={':id'} element={<PostDetails/>}/>
            </Route>
        </Routes>


        <hr/>

    </div>
  );
}

export default App;
