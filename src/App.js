import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostDetailPage, PostsPage, UsersPage} from "./pages";



function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}>
                <Route path={':id'} element={<PostDetailPage/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
        </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>

  );
}

export default App;
