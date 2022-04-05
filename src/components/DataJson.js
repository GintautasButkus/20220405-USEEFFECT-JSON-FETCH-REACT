import React, { useState, useEffect } from 'react'

export default function DataJson() {
    const [resource, setResource] = useState('users')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resource])


  return (
      <>
        <div>
            <button onClick={() => setResource("users")} className="btn btn-primary col-2 my-2 mx-2" >Users</button>
            <button onClick={() => setResource("posts") }className="btn btn-warning col-2 my-2 mx-2">Posts</button>
            <button onClick={() => setResource("comments")} className="btn btn-danger col-2 my-2 mx-2">Comments</button>
        </div>
        <h2 className="mx-5 mt-5">{resource}</h2>
        <hr></hr>
        {items.map(item => {
            return <p key={item.id} className="col-6 mx-5 my-5">{JSON.stringify(item)}</p>
        })}
      </>
    
  )
}
