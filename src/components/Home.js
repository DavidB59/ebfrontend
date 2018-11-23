import React from 'react'
import {connect} from 'react-redux'
import {loadOOSlist} from '../actions/oos'
import { Link } from 'react-router-dom'

// import CreateUserForm from './CreateUserForm'
// import { Redirect} from 'react-router-dom'
class Home extends React.Component {
  state = {

  }

  componentDidMount() {
    this.props.loadOOSlist()
  }
  // {object.title} 
  // {object.price? object.price : object.price}
  // {object.phone? object.phone : console.log()}

  render() {
    return (
      <div>
      
      <h1>List of items</h1>
      <ul>
        {!this.props.objectlist ? <p> Loading.... </p> : 
        this.props.objectlist.map(object => 
          <Link to={ `/object/${object.id}` }>
        <li key={object.id}> 
         {`Title ${object.title} Price ${object.price} € `}
   
        </li> </Link>)}
         </ul>
         <Link to='/sell'><button> Sell an object </button> </Link>
      </div>

    )
  }
}   


const mapStateToProps = state => ({
  objectlist:state.objectlist
})


export default connect(mapStateToProps, {loadOOSlist})(Home)






