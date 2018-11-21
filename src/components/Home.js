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

      <h1>Welcome to class!</h1>
      <ul>
        {!this.props.objectlist ? <p> Loading.... </p> : 
        this.props.objectlist.oos.map(object => <li key={object.id}> 
         {`${object.title} ${object.price} `}
   
        </li> )}
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