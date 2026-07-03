import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import CreateForm from './pages/CreateForm.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CreatePost />} />
          <Route path="/create-post" element={<CreateForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App