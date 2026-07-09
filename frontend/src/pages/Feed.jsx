import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
const Feed = () => {
    
    const [ posts, setPosts ] = useState([
        {
            _id: "1",
            image: 'https://images.unsplash.com/photo-1782760794049-af90285498cc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Beautiful sunset at the beach',
        }
    ])
    useEffect(() => {
            axios.get('http://localhost:3000/posts')
                .then((response) => {
                    setPosts(response.data.posts);
                })
                .catch((error) => {
                    console.error('Error fetching posts:', error);
                });
    }, [])
  return (
    <section className="feed-section">
        <Link to="/create-post" className="back-icon" aria-label="Go to create post">
            <IoMdArrowRoundBack />
        </Link>
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available.</h1>
            )
        }
        </section>
  )
}

export default Feed