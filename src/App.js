import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import "./App.css";
import useToken from './pages/useToken';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavLink } from "react-router-dom";
import InitialTest from './pages/startToRegister/index';
import DonaterDetailsForm from "./pages/donater";
import NeedsDonationDetailsForm from "./pages/needsDonation";
// import SignupForm from "./pages/startToRegister/tryYupGabage"
import { AuthContextProvider } from "./context/authContext";
import { AppBarr } from "./pages/appBar";
import { EnterDataBase } from "./pages/enterDataBase";
import { AdjusmentFunction } from "./pages/adjusmentFunction";
import { AdminScreen } from "./pages/admin";
import { PreviousCrosses } from "./pages/previousCrosses";
import { DBdonaters } from "./pages/DBdonaters";
import DBneedsDonation from "./pages/DBneedsDonation";
import { DBusers } from "./pages/DBusers";
// import { useNavigate } from "react-router-dom";
// import { FileDownload } from "@mui/icons-material";
// import MedicalFormYup from "./pages/startToRegister/tryYup"
// import { AuthContext } from "//pages/context";


const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "StartToRegister/:type", component: InitialTest },
  { path: "/donater/:donater", component: DonaterDetailsForm },
  { path: "/needs-donation/:needs-donation", component: NeedsDonationDetailsForm },
  { path: "/donater", component: DonaterDetailsForm },
  { path: "/needsDonation", component: NeedsDonationDetailsForm },
  { path: "/enterDataBase", component: EnterDataBase },
  { path: "/enterDataBase", component: AdjusmentFunction },
  { path: "/enterDataBase", component: PreviousCrosses },
  { path: "/admin", component: AdminScreen },
  { path: "/DBdonaters", component: DBdonaters },
  { path: "/DBneedsDonation", component: DBneedsDonation },
  { path: "/test", component: <h1> Test</h1> },
  // { path: "/DBusers", component: DBusers }
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
  // const navigate = useNavigate();
  // const {currentUser}=useContext(AuthContext)
  return (<>

    {/* <SignupForm></SignupForm> */}
    { /* <MedicalFormYup></MedicalFormYup>
    <MedicalFormState></MedicalFormState>
   <MedicalFormFormik></MedicalFormFormik> */}
    {/* <InatialTest></InatialTest> */}

    <Router>
      <AuthContextProvider>

        <AppBarr></AppBarr>

        <nav>
          {/* <NavLink to="/">home page</NavLink><br></br>
          <NavLink to="/register">Register  </NavLink><br></br> */}
          {/* <NavLink to="/login">Login</NavLink><br></br> */}
        </nav>
        <Routes>
          {routes.map((route) => <Route key={route.path} path={route.path} element={<route.component />} />)}
          {/* <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}> </Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/StartToRegister/:typeId" element={<InitialTest />}></Route>
      <Route path="/donater" element={<DonaterDetailsForm></DonaterDetailsForm>}></Route>  */}
        </Routes>


      </AuthContextProvider>
    </Router>
  </>
  );
}

export default App;
