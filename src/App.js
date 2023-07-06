import Login from "./pages/login/index3";
import Home from "./pages/home";
import Register from "./pages/register/index3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import InitialTest from './pages/startToRegister/index';
// import DonaterDetailsForm from "./pages/donater";
import NeedsDonationDetailsForm from "./pages/needsDonation";
import { AuthContextProvider } from "./context/authContext";
import { AppBarr } from "./pages/appBar";
import { EnterDataBase } from "./pages/admin/enterDataBase";
import { AdjusmentFunction } from "./pages/admin/adjusmentFunction";
import { AdminScreen } from "./pages/admin";
import { PreviousCrosses } from "./pages/admin/previousMatches";
import { DBdonaters } from "./pages/admin/DBdonaters";
import DBneedsDonation from "./pages/admin/DBneedsDonation";
import DonaterForm from "./pages/donaterWizard/donaterForm"
import { DBusers } from "./pages/admin/DBusers";
import Nav from "./pages/appBar";
import DonateInformatiun from "./pages/medicalInformation/matnatChaim"
import CrossoverDonationPage from "./pages/about";
import MedicalInformationDonors from "./pages/medicalInformation/donaterDetails";
import MedicalInformationNeedies from "./pages/medicalInformation/neediesDetails";
import Footer from "./pages/appBar/footer";
// import Nomi from "./pages/neomi";

const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  // { path: "StartToRegister/:type", component: InitialTest },
  // { path: "/donater/:donater", component: DonaterDetailsForm },
  //{ path: "/needs-donation/:needs-donation", component: NeedsDonationDetailsForm },
  { path: "/donater", component: DonaterForm },
  { path: "/needs-donation", component: NeedsDonationDetailsForm },
  { path: "/enterDataBase", component: EnterDataBase },
  { path: "/enterDataBase", component: AdjusmentFunction },
  { path: "/enterDataBase", component: PreviousCrosses },
  { path: "/admin", component: AdminScreen },
  { path: "/DBdonaters", component: DBdonaters },
  { path: "/DBneedsDonation", component: DBneedsDonation },
  { path: "/DBusers", component: DBusers },
  { path: "/about-us", component: CrossoverDonationPage },
  {path: "/donater-medical-details",component:MedicalInformationDonors},
  {path: "/needy-medical-details",component:MedicalInformationNeedies}

]


function App() {


  return (<>
    {/* <Nomi></Nomi> */}
 {/* <MedicalInformationDonors></MedicalInformationDonors> */}
    {/* <CrossoverDonationPage></CrossoverDonationPage> */}
    {/* <DonateInformatiun></DonateInformatiun> */}
    <Router>
      <AuthContextProvider>

        <Nav />
        <Routes>
          {routes.map((route) => <Route key={route.path} path={route.path} element={<route.component />} />)}
        </Routes>
        <Footer></Footer>
      </AuthContextProvider>
    </Router>
  </>
  );
}

export default App;
