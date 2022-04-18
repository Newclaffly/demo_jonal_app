import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface ItemListjonalApp {
  id: string,
  title: string,
  url_image: string
  // passdata: ()=>void
}
function ItemListjonal() {
  const [APIData, setAPIData] = useState<ItemListjonalApp[]>([]);

  useEffect(() => {
    getJonalData()
  }, [])

  const getJonalData = () => {
    axios.get("http://localhost:3000/getallJonal").then((response) => {
      setAPIData(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }


  const UpdateUser = (id: string) => {
    window.location.href = '/update/' + id
  }

  const DeleteJonal = (id: string) => {
    axios.delete(`http://localhost:3000/deleteJonal/${id}`)
      .then(() => {
        getJonalData();
      })
  }


  return (
    <div>
      <h1>Item List jonal</h1>
      {APIData.map((val) => {
        return (
          <div className="item-jonal-list" key={val.id}>
            <h4>{val.id}</h4>
            <h4>{val.title}</h4>
            {/* <Link to='/update/'>
              <button onClick={() => setData(val.id,val.title,val.url_image)}>Update</button>
            </Link> */}
            <button onClick={() => UpdateUser(val.id)}>Update</button>
            <button onClick={() => DeleteJonal(val.id)}>X</button>
            <br />
            <br />
            <img src={val.url_image} alt={val.id} />
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default ItemListjonal