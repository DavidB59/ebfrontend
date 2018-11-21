import React from 'react'
import { Link } from 'react-router-dom'

export default function AddingObjectForm(props) {
  return (<div>
    <h1> Adding Object From </h1>

{ <form onSubmit={props.onSubmit}>
   <label>
     Title:
     <input  name="title" onChange={props.onChange} value={props.values.title} />
   </label>
   <label>
     Price:
     <input  name="price" onChange={props.onChange} value={props.values.pricep} />
   </label>
   <label>
     Email:
     <input  name="email" onChange={props.onChange} value={props.values.email} />
   </label>


   {/* <Link to='/home'>*/}<button type="submit">Add</button>{/*</Link> */}
 </form> }



        </div>)
}

