import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
        <h1>Blog</h1>
        <h2>Blog posts</h2>
        <div className="posts">
            <Link to={'/blog/1'}> Blog Post 01 </Link>
            <Link to={'/blog/2'}> Blog Post 02 </Link>
            <Link to={'/blog/3'}> Blog Post 03 </Link>
            <Link to={'/blog/4'}> Blog Post 04 </Link>
            <Link to={'/blog/5'}> Blog Post 05 </Link>
        </div>
    </div>
  )
}

export default Blog