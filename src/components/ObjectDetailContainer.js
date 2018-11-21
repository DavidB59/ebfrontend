import React from 'react'
import {connect} from 'react-redux'
import ObjectDetail from './ObjectDetail'
import {loadObject} from '../actions/oos'
import { Link } from 'react-router-dom'

class ObjectDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadObject(Number(this.props.match.params.id))
  }




  render() {
    return (<> <ObjectDetail 
     object={this.props.object}        
   
    />
    <Link to={ `/home` }>  <button >Back</button> </Link>
     </>

    )
  }
}

const mapStateToProps = state => ({
  object:state.object

})

export default connect(mapStateToProps, {loadObject})(ObjectDetailsContainer)