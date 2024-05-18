import React from 'react'
import { Link } from 'react-router-dom'

const Works = () => {
  return (
    <div>
        <h1>Works</h1>
        <h2>My latest works</h2>
        <div className="works">
            <Link to={'/works/01'}> Single Work 01 </Link>
            <Link to={'/works/02'}> Single Work 02 </Link>
            <Link to={'/works/03'}> Single Work 03 </Link>
            <Link to={'/works/04'}> Single Work 04 </Link>
            <Link to={'/works/05'}> Single Work 05 </Link>
        </div>
    </div>
  )
}

export default Works