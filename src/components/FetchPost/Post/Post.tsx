import {IPost} from "./post.models.ts";
import './post.styles.css';

const Post = ({postId, title, content}: IPost) => {
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Post ID: {postId}</p>
        </div>
    )
};

export default Post;