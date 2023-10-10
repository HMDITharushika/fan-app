import "./register.css";
import { Link } from "react-router-dom";

export default function Register(){
    return(
        <div className="Register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your Username..."/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter Your Email..." />
                <label>Password</label>
                <input type="text" className="registerInput" placeholder="Enter Your Email..." />
                <button className="registerButton">Login</button>
                 </form>

                <button className="registerRegisterButton">Login</button>
                <Link to="/login">LOGIN</Link>
                
            

        </div>
    );
}