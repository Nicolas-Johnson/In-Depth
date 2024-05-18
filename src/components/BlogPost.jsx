import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BlogPost = () => {
    const { postId } = useParams();

    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate('/blog');
    };
    return (
        <div>
            <h1>BlogPost post <strong>{postId}</strong></h1>
            <button onClick={handleBack}>Back to blog</button>
        </div>
    )
}

export default BlogPost 