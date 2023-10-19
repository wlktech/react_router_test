import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Home() {
  let url = "http://localhost:3001/blogs";
  let { data: blogs, loading, error } = useFetch(url);

  return (
    <>
    {error && <div>{error}</div>}
    {loading && (<div>loading...</div>)}
    {blogs && blogs.map(blog => (
      <div className='container my-3' key={blog.id}>
        <div className="card p-3">
          <h3>{blog.title}</h3>
          <p>Author - {blog.author}</p>
          <Link to={`blog/`+blog.id}>Read More</Link>
        </div>
      </div>
    ))}
    </>
  )
}
