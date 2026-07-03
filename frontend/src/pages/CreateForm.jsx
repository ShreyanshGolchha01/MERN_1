import react from 'react'

const CreateForm = () => {
  return (
    <form>
      <input type="text" placeholder="Title" />
      <textarea placeholder="Content"></textarea>
      <button type="submit">Create Post</button>
    </form>
  )
}

export default CreateForm