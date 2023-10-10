import "./singlePost.css";

export default function SinglePost(){
    return(
        <div className="SinglePost">
            <div className="SinglePostWrapper">
                <img src="https://www.nme.com/wp-content/uploads/2022/07/ateez-kq-entertainment-120722.jpg" 
                alt="" className="SinglePostImage" height={400} weight={100}
                    
           />

                <h1 className="SinglePostTitle">Lorem, ipsum dolor sit amet 

                <div className="SinglePostEdit">
                <i className="SinglePostIcon fa-regular fa-pen-to-square"></i>
                <i className="SinglePostIcon fa-solid fa-trash-can"></i>
                </div>
                </h1>

                <div className="SinglePostInfo">
                    <span className="SinglePostAuthor"> Author:<b>Ishadi Tharushika</b></span>
                    <span className="SinglePostDate"> 1 hour ago </span>
                </div>
                <p className="SinglePostDescription"> 
                
            </p>
            </div>

        </div>
    )
}