import React from 'react';
import {useQuery} from 'react-query';

const fetchPosts = async () => {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/posts' );
    const data = res.json()
    return data;
}
export default function PostsComponent () {
    const {data, isLoading, isError, error, refetch, isFetching} = useQuery(
        'posts',
        fetchPosts,
        {
            staleTime: 5000, // Data is fresh for five seconds
            cacheTime: 300000, // Cache persists for 5 minutes
            refetchOnWindowFocus: true, // Refetch when the window regains focus
            keepPreviousData: true, // Retain old data while fetching new data
        }
    );
    if ( isLoading ) {
        return <div>Loading ...</div>
    }
    if ( isError ) {
        return <div>Error: {error.message}</div>
    }
  return (
    <div>
          <h1>Posts</h1>
          <button onClick={refetch} disabled={isFetching}>
              {isFetching ? 'Refetching' : "Refetch Posts"}
          </button>
          <ul>
              {data.map( ( post ) => (
                  <li key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>

                  </li>
              ))}
          </ul>
    </div>
  )
}
