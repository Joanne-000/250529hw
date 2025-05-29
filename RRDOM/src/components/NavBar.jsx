import { NavLink } from "react-router"

const NavBar = () => {
    return (
        <nav>
        <div> <NavLink to="/">Home</NavLink></div>
        <div> <NavLink to="/mailboxes">Mailboxes</NavLink></div>
        <div> <NavLink to="/new-mailbox">New Mailbox</NavLink></div>
        </nav>
    )
}

export default NavBar