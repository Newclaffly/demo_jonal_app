import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface ItemListjonalApp {
  id: string,
  title: string,
  url_image: string
}

interface ItemListTest {
  APIDatas: ItemListjonalApp[];
  updateUser:(id:string)=>void
  deleteJonal: (id:string)=>void
}

function ItemListjonal(props: ItemListTest) {

  // const [APIData, setAPIData] = useState<ChildComponentProps[]>([]);

  //   // useEffect(() => {
  //   //   getJonalData()
  //   // }, [])

  //   // const getJonalData = () => {
  //   //   axios.get("http://localhost:3000/getallJonal").then((response) => {
  //   //     setAPIData(response.data)
  //   //   }).catch((err) => {
  //   //     console.log(err)
  //   //   });
  //   // }


  //   // const UpdateUser = (id: string) => {
  //   //   window.location.href = '/update/' + id
  //   // }

  //   // const DeleteJonal = (id: string) => {
  //   //   axios.delete(`http://localhost:3000/deleteJonal/${id}`)
  //   //     .then(() => {
  //   //       getJonalData();
  //   //     })
  //   // }


  return (
    <div>
      <h1>Item List jonal</h1>
      {props.APIDatas.map((val) => {
        return (
          <div className="item-jonal-list" key={val.id}>
            <h4>{val.id}</h4>
            <h4>{val.title}</h4>
            <button onClick={() => props.updateUser(val.id)}>Update</button>
            <button onClick={() => props.deleteJonal(val.id)}>X</button> 
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