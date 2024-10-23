import React from 'react'

const Post = ({title, id, body}) => {

  return (
    <>
      <div className='post'>
        <div>
          <h2>{title}</h2>
          <h3>Post No. {id}</h3>
          <p>{body}</p>
        </div>
      </div>
      
      
    </>
  );
}

export default Post