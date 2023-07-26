import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
	const { logout } = useLogout()
	const { user } = useAuthContext()

	const handleClick = () => {
		logout()
	}

	return (
		<header>
			<div className="container">
				<Link to="/">
					<h1>Workout Home</h1>
				</Link>
				<nav>
					{user && (
						<div>
							<span>{user.email}</span>
							<button onClick={handleClick}>Log out</button>
						</div>
					)}
					{!user && (
						<div>
							<Link className="nav-hover" to="/login">
								Log in
							</Link>
							<Link className="nav-hover" to="/signup">
								Sign up
							</Link>
						</div>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
