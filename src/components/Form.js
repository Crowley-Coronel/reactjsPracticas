import React, { useState } from 'react'
import axios from 'axios'
import { Input } from 'reactstrap'

const Form = (props) => {
  const [username, setUsername] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
      props.onSubmit(resp.data)
      setUsername('')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
        style={{ width: '250px' }}
      />
      <button type="submit">Add card</button>
    </form>
  )
}

export default Form
