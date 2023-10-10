import "./settings.css";
import Sidebar from "../../components/sidebar/sidebar"

export default function Settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture </label>
                    <div className="settingsProfilePicture">
                        <img src="https://www.themoviedb.org/t/p/w500/k8h67KZ5BJKzmxkkAnXorvAJy0N.jpg"
                        alt="Wang Yibo" />
                        <label htmlFor="fileInput">
                        
                        <i className="settingsProfilePictureIcon fa-sharp fa-solid fa-user"> </i>
                         </label>

                         <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>

                    <label> Username </label>
                    <input type="text" placeholder="Ishadi" />
                    <label> Email </label>
                    <input type="mail" placeholder="ishadi@gmail.com" />
                    <label> Username </label>
                    <input type="password"  />

                    <button className="settingsSubmit">Update</button>
                    

                </form>
            </div>
            <Sidebar />
        </div>
    )
}