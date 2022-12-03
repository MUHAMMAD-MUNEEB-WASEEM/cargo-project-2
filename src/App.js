import {Routes,Route} from "react-router-dom"
import Forget from "./pages/forget/Forget";
import Profile from "./components/profile/Profile";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Signup from "./pages/signup/Signup";
import SignupDetails from "./pages/SignupDetails/SignupDetails";
import Terms from "./pages/TermsCondition/Terms";

function App() {
  return (
    <div className="cargo-app">
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/TermsandCondition" element={<Terms/>}/>
        <Route path="/signupdetails" element={<SignupDetails/>}/>
        <Route path="/profile1" element={<Profile title="License Verification" para="Upload driving licence for verification"/>}/>
        <Route path="/profile2" element={<Profile title="Identity Verification" para="Upload passport or ID card or license for verification"/>}/>
      </Routes>
    </div>
  );
}

export default App;
