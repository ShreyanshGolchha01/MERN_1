import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
const CreatePost = () => {
  const [imagePreview, setImagePreview] = useState('')

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const handleImageChange = (event) => {
    const selectedFile = event.target.files?.[0]

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview)
    }

    if (!selectedFile) {
      setImagePreview('')
      return
    }

    setImagePreview(URL.createObjectURL(selectedFile))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await axios.post('http://localhost:3000/create-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Post created successfully:', response.data);
      event.target.reset();
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
      setImagePreview('')
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <section className="create-post-section">
      <Link to="/feed" className="home-icon">
        <FaHome />
      </Link>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type ="file" placeholder= "Image" name="image" accept="image/*" onChange={handleImageChange} />
        {imagePreview ? (
          <img className="image-preview" src={imagePreview} alt="Selected preview" />
        ) : null}
        <input type ="text" placeholder="Write a caption..." name="caption" required />
        <button type="submit">Post</button>
      </form>
    </section>
  )
}

export default CreatePost