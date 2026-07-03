import React from 'react'

const CreatePost = () => {
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form>
        <input type ="image" placeholder="Image" name="image" accept="image/*" />
        <input type ="text" placeholder="Write a caption..." name="Caption" />
        <button type="submit">Post</button>
      </form>
    </section>
  )
}

export default CreatePost