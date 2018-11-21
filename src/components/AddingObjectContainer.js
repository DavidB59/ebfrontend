import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import AddingObjecFrom from './AddingObjectForm'
import {loadOOSlist,addObject} from '../actions/oos'

// import CreateUserForm from './CreateUserForm'
// import { Redirect} from 'react-router-dom'
class AddingObject extends React.Component {
  state = {
    title: '',
    price:null,
    email:''
  }

  

  componentDidMount() {
  }



  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      title: '',
      price: null,
      email:''
    }
  
    )
     if(this.state.title === "" ) {
      alert('you must give a title')
      return
    }
    else  if(isNaN(parseInt(this.state.price ))) {
      alert('Price must be a number')
      return
    }
    else if(this.state.email === "" ) {
      alert('you must give a valid email')
      return
    }
   
    console.log(this.state)
    this.props.addObject(this.state)
    this.props.loadOOSlist()

    this.props.history.push('/home')

  }
  
  render() {
    return (
      <div>

   <AddingObjecFrom 
    onSubmit={this.onSubmit}
    onChange={this.onChange}
    values={this.state}
>
   </AddingObjecFrom>
      </div>

    )
  }
}


const mapStateToProps = state => ({
  objectlist:state.objectlist
})


export default connect(mapStateToProps,{loadOOSlist,addObject})(AddingObject)


