import "./write.css";
import { useState } from "react";

export default function Write(){

    const [text, setText] = useState ('');

    function handleChange (e) {
        setText (e.target.value)
    }
    return(
        <div className="write">

            <img className="writeImg"
            src="https://wallpaperaccess.com/full/1501616.jpg" alt="EXO" />

            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                         </label>
                         <h1> </h1>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} 
                    value={text} onChange={handleChange}/>
                    <p> <h1> {text}</h1> </p>
                    </div>
                     
                     <div className="writeFormGroup">
                        <textarea placeholder="Tell Your Thoughts..." typeof="text" className="writeInput writeText">
                        </textarea>
                        
                     </div>

                     <button className="writeSubmit">Publish</button>
                     </form>

                     

        </div>
    )
}