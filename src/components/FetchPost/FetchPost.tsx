import React from 'react';
import Button from "../Button/Button.tsx";
import './fetchPost.styles.css';
import {useFetchPost} from "./fetchPost.hooks.tsx";
import Post from "./Post/Post.tsx";

const FetchPost: React.FC = () => {
    const {state, fetchData} = useFetchPost();

    return (
        <div className='post-view__wrapper'>
            <Button isLoading={state.loading} onClick={fetchData} text={'Fetch Data'} />
            {
                state.error ? (
                    <div className="error">Error: {state.error.message}</div>
                ) : state.data ? (
                    <Post
                        postId={state.data.id}
                        title={state.data.title}
                        content={state.data.body}
                    />
                ) : null
            }
        </div>
    );
};

export default FetchPost;
