import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='Post' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR-_r8Kn31P_C8n1JQX-8WarXg_UFwXktYD059MgaWz4d-vVoC&usqp=CAU"></img>
                <div>             
                    {props.message}
                </div>
            <div>
                <span>Like: {props.likesCount}</span>
            </div>
        </div>

    )
}

export default Post;

