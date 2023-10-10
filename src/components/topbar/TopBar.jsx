import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">

            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i></div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListIten">
                        <Link to="/" className="link">HOME</Link></li>
                    <li className="topListIten">
                        <Link to="/"  className="link">VIDEOS</Link></li>
                    <li className="topListIten">
                        <Link to="/" className="link"> CONTACT</Link></li>
                    <li className="topListIten">
                        <Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListIten">
                        {user && "LOGOUT"} </li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? (
                        <img className="topImage"
                src="https://i.pinimg.com/564x/d0/bb/4e/d0bb4e3c151c71bef0815578bd584107.jpg" 
                alt="cover"
                />

                    ) : (
                        <ul className="topList">
                            <li className="topListIten" > 
                            <Link to="/login" className="link"> LOGIN </Link>
                        </li>
                            
                            <li className="topListIten" > 
                        <Link to="/register" className="link"> REGISTER </Link>
                        </li>
                        </ul>
                    )
                }
                
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

            </div>
                
        </div>
    )
}
