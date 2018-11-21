export default (state = null, action = {}) => {
  switch (action.type) {
      case "OBJECTLIST":
      return action.objectlist.oos
      case "ADDOBJECT":
      // state = ...state
      return [...state.objectlist, action.objectlist]
    default:
      return state
  }

}
