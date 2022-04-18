import axios from 'axios'
import React, { useState } from 'react'
import ItemListjonal from './ItemListjonal'

// interface IjonalCreate{
//   title:string,
//   url:string
// }

function FormCreateJonal() {
  
  const [title,setTitle] = useState('')
  const [urlImage,setUrlImage] = useState('')

  const postData = () =>{
    console.log(`title: ${title}, url: ${urlImage}`)
   axios.post(`http://localhost:3000/createJonal`,{
     title:title,
     url_image:urlImage
   })
  }

  return (
      <>
      <form>
        <h1>Form Create jonal</h1>
        <div className="input-title-jonal">
          <label>Input title: </label>
          <input type="text" name='title' placeholder='input title' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <br />
        <div className="input-url-jonal">
          <label>Input url image: </label>
          <input type="text" name='url' placeholder='input url image' onChange={(e)=> setUrlImage(e.target.value)} />
        </div>
        <br />
        <div className="btn-create-jonal">
          <button type='submit' onClick={postData} >Create Jonal</button>
        </div>
      </form>
      <br/>
      <ItemListjonal/>
      </>
      
  )
}

export default FormCreateJonal