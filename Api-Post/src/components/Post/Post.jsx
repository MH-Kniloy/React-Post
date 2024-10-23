import React, { useState } from 'react'

const Post = ({title, id, body}) => {

  const [readMore, setReadMore] = useState(false)

  if(!readMore){
    body = body.substring(0,70) + '....'
  }

  return (
    <>
      <div className='post'>
        <div>
          <h2>{title}</h2>
          <h3>Post No. {id}</h3>
          <p>{body}</p>
          <button onClick={()=>{
            !readMore?setReadMore(true):setReadMore(false)
          }}>{readMore?'Less':'Read More'}</button>
        </div>
      </div>
      
      
    </>
  );
}

export default Post