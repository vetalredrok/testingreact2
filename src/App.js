import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {CarsPage, LoginPage, RegisterPage} from "./Pages";


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'/login'}/>}/>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'/register'} element={<RegisterPage/>}/>
          <Route path={'/cars'} element={<CarsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
