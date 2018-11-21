export default (state = null, action = {}) => {
  switch (action.type) {
      case "FETCHED":
      return action.object
    default:
      return state
  }

}