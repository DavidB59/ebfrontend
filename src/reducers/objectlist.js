export default (state = null, action = {}) => {
  switch (action.type) {
      case "OBJECTLIST":
      return action.objectlist      
    default:
      return state
  }

}
