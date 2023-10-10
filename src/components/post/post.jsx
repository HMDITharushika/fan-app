import './post.css'
import { useState } from 'react'

export default function Post(props){
    const [liked,setLiked] = useState(true);

    function handleChange(e){
        setLiked(e.forget.checked);
    }
    return(
        <div className='post'>
            <img src={props.postBanner}
            alt='sehu' height={200} weight={200}/>

            <div className='postInfo'>
                <div className='postCat'>
                    <span className="postCat">{props.user}</span>
                    <span> <input type='checkbox' checked={liked} onChange={handleChange}/>
                    <label> I liked this </label>
                    <p> You {liked? 'liked': 'did not like' } this </p> </span>
                </div>
                <span className="postTitle"> {props.Title}</span>
                <hr />
                <span className="postDate">{props.Time}</span>
            </div>

            <p className='postDescription'>
                {props.postContentTxt}</p>

        </div>

    )
} 