import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

export default function Api() {
  const [url, setUrl] = useState("https://flutterapi.delightmyanmar.pro/api/home");
  let { data: blogs, page: links, loading, error } = useApi(url);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      
        <div className='container my-3'>
          <div className="row">
          {blogs && blogs.map(blog => (
            <>
            <div className="col-md-4 mb-3" key={blog.id}>
              <div className="card border border-0 shadow">
                    <img src={blog.image} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3>{blog.title}</h3>
                        <p>{blog.desc}</p>
                        <Link to={`/api/blog/`+blog.id}>Read More</Link>
                    </div>
              </div>
            </div>
            </>
          ))}
          </div>
          <div className="d-flex justify-content-center">
            {links && links.map(link => (
              <div key={link.id} className='m-3'>
                <button className={`btn btn-sm btn-outline-secondary ${link.active === true ? 'active' : ''}`} onClick={() => setUrl(link.url)}>
                  {link.label}
                </button>
              </div>
            ))}
          </div>
        </div>
    </>

  )
}
