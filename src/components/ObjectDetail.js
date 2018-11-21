import React from 'react'
//import {loadPlaylists} from '../actions/Playlists'
//import {connect} from 'react-redux'

export default function ObjectDetails(props) {
return ( <div> 

{ !props.object ? <h1> Loading ... </h1> : 
<h4>
<ul>  
<li>Title : {props.object.title} </li>
<li> Price : {props.object.price} </li>

  <li>Email :{props.object.email} </li>
  <li> Picture : {props.object.picture? props.object.picture :'No picture'}</li>

 <li> Description : {props.object.description? props.object.description :'No description'}</li>
 <li> Phone : {props.object.phone? props.object.phone : 'No phone'}</li>

  </ul>
</h4>
 
}



 </div> 
)}