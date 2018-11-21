import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

// import CreateUserForm from './CreateUserForm'
// import { Redirect} from 'react-router-dom'
class AddingObject extends React.Component {
  state = {

  }

  componentDidMount() {
  }

  render() {
    return (
      <div>

      <h1>Adding Object To Sell</h1>
  
      </div>

    )
  }
}


const mapStateToProps = state => ({
  objectlist:state.objectlist
})


export default connect(mapStateToProps)(AddingObject)