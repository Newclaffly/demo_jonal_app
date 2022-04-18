import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// interface IFormUpdateItemList {
//   id: string,
//   title: string,
//   url_image: string

// }


function FormUpdateJonal() {
  // const [id,setID] = useState('')
  const [title, setTitle] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [ID, setID] = useState('')

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/getJonaById/${id}`).then((response) => {
      setTitle(response.data.title)
      setUrlImage(response.data.url_image)
      setID(response.data.id)
    }).catch((err) => {
      console.log(err)
    });
  }, [id])

  const handleSubmit = (event: FormEvent) =>{ 
    event.preventDefault()
    var data = {
      id:ID,
      title:title,
      url_image:urlImage
    }
    axios.put('http://localhost:3000/updateJonal/',data).then((response) => {
      setID("")
      setTitle("")
      setUrlImage("")
      window.location.href = '/listjonal';
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form Update jonal</h1>
      <div className="input-title-jonal">
        <label>Input title: </label>
        <input type="text"
          name='title'
          placeholder='input title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <br />
      <div className="input-url-jonal">
        <label>Input url image: </label>
        <input type="text" name='url' placeholder='input url image' onChange={(e) => setUrlImage(e.target.value)}
          value={urlImage}
        />
      </div>
      <br />
      <div className="btn-create-jonal">
        <button type='submit' >Update Jonal</button>
      </div>
    </form>
  )
}

export default FormUpdateJonal