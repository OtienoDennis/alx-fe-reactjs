import React from 'react'
import {useParams} from 'react-router-dom'

export default function BlogPost () {
    const {id} = useParams();
  return (
    <div>
          <h1>Blog Post {postId}</h1>
          <p>Content for blog post {postId} ...</p>
    </div>
  )
}
