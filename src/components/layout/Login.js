"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import Loading from "./Loading";

const Login = () => {
    const { data: session, status} = useSession();

    const handleLoginLogout = (e, inOut = "out") => {
        e.preventDefault();
        if(inOut === "in"){
            signIn();
        }else{
            signOut();
        }
    }; 

    if(status === "loading"){
        return <li className="nav-item"><span className="nav-link nav-text colorWhite"><Loading color="dark" /></span></li>;
    }
    else if (status === "authenticated" && session) {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{session.user.email}</a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                    <li key="dashboardLink"><Link href="/dashboard" className="dropdown-item">Dashboard</Link></li>
                    {/* <li key="settingsLink"><Link href="/settings" className="dropdown-item">Settings</Link></li> */}
                    <li key="lihr"><hr className="dropdown-divider"/></li>
                    <li key="logoutLink"><a className="dropdown-item" onClick={(e)=>{handleLoginLogout(e)}}>Logout</a></li>
                </ul>
            </li>
        )
    }

    return <li className="nav-item"><a className="nav-link" onClick={(e) => handleLoginLogout(e, "in")}>Login</a></li>;
}
export default Login;