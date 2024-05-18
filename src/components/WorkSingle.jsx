import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const WorkSingle = () => {
    const { workId } = useParams();

    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate('/works');
    };
    return (
        <div>
            <h1>WorkSingle post <strong>{workId}</strong></h1>
            <button onClick={handleBack}>Back to blog</button>
        </div>
    )
}

export default WorkSingle 