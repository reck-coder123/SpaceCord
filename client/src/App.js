
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import EmailVerify from "components/EmailVerification";
import Main from "components/Main";
import ForgotPassword from "components/ForgetPassword";
import PasswordReset from "components/password-reset";
import Educationdetails from "components/edudetails";
import Inscribe from "components/inscribe";
function App() {
	const user = localStorage.getItem("token");
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{<Route path="/signup/educationdetails" exact element={<Educationdetails />} />}
			<Route path="/" exact element={<Home/>} />
			<Route path="/signup" exact element={<Signup />} />
			{< Route path="/login" exact element={<Login />} />}
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/users/:id/verify/:token" element={< EmailVerify/>} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
			{/* <Route path="/inscribe" exact element={<Signup />} /> */}
			{user && <Route path="/inscribe" exact element={<Inscribe />} />}
		</Routes>
	);
}

export default App;
