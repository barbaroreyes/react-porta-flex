import React from 'react'

const Form = () => {
  return (
    <form>
        <h2>Contact Me</h2>
        <label>name</label>
      <input type="text"/>
      <label>Email</label>
      <input type="email"/>
      <label>message</label>
      <textarea></textarea>

      <button type="submit">send</button>
    </form>
  )
}

export default Form
