import React, { useState } from "react";
import "./App.css";
import "./styles/navbar.css";
import "./styles/login.css";
import Grid from "@material-ui/core/Grid";
import Main from "./pages/main";
import IITJLogo from "./assets/IITJ.png";

const App = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const clearForm = () => {
		setEmail("");
		setPassword("");
	};

	const validateForm = () => {
		return (
			email.length > 0 &&
			email.match("(^[a-z]+).([0-9]+)") &&
			password.length > 0
		);
	};

	return (
		<div className='App'>
			<Grid container style={{ marginBottom: 68 }}>
				<div className='wrapper'>
					<nav>
						<div
							className='content'
							style={{ justifyContent: "space-between" }}
						>
							<div className='logo'>
								<img src={IITJLogo} alt='logo' width='55px' heigth='58px' />
							</div>
							{loggedIn ? (
								<div className='buttons'>
									<button>Profile</button>
									<button onClick={() => setLoggedIn(false)}>Logout</button>
								</div>
							) : (
								<div className='buttons'>
									<button>Login</button>
								</div>
							)}
						</div>
					</nav>
				</div>
			</Grid>
			{loggedIn ? (
				<Main />
			) : (
				<div className='Login'>
					<h3 className='heading'>Student Login</h3>
					<div className='form'>
						<input
							className='Loginform'
							autoFocus
							placeholder='Enter LDAP ID'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							value={password}
							placeholder='Enter LDAP Password'
							className='Loginform'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='login-buttons'>
						<button
							size='lg'
							onClick={() => clearForm()}
							className='clearButton'
						>
							Clear
						</button>
						<button
							size='lg'
							type='submit'
							disabled={!validateForm()}
							onClick={() => setLoggedIn(true)}
							className='loginButton'
						>
							Login
						</button>
					</div>
				</div>
			)}
			<div
				className='footer'
				style={{
					width: "100%",
					height: "2.5rem",
					lineHeight: "2.5rem",
					margin: "auto",
				}}
			>
				Made with ❤️ by{" "}
				<a href='mailto:jain.38@iitj.ac.in' target='_blank' rel='noreferrer'>
					Darshit K Jain [B19EE024]
				</a>
			</div>
		</div>
	);
};

export default App;
