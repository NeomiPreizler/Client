import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import { useState } from "react"
import "./App.css";
import useToken from './pages/useToken';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavLink } from "react-router-dom";
import InitialTest from './pages/startToRegister/index'
import DonaterDetailsForm from "./pages/donater";
const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "StartToRegister/:typeId", component: InitialTest },
  
]
function App() {

  // const [token, setToken] = useState();
  // function setToken(userToken) {
  //   sessionStorage.setItem('token', JSON.stringify(userToken));

  // }

  // function getToken() {
  //   const tokenString = sessionStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token
  // }
  //const token = getToken;

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (<>
    {/*<SignupForm></SignupForm>
     /* <MedicalFormYup></MedicalFormYup>
    <MedicalFormState></MedicalFormState>
   <MedicalFormFormik></MedicalFormFormik> */}
    {/* <InatialTest></InatialTest> */}
    <Router>
      <nav>
        <NavLink to="/">home page  </NavLink><br></br>
        <NavLink to="/register">Register  </NavLink><br></br>
        <NavLink to="/login">Login  </NavLink><br></br>
      </nav>
      <Routes>

      {routes.map((route)=><Route key={route.path} path={route.path} element={<route.component/>}/>)}


       {/* <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}> </Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/StartToRegister/:typeId" element={<InitialTest />}></Route>
      <Route path="/donater" element={<DonaterDetailsForm></DonaterDetailsForm>}></Route>  */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
