import request from 'superagent'

const baseUrl = 'http://localhost:4000'


export const loadOOSlist = () => (dispatch, getState) => {
  if (getState().objectlist) return

  request.get(`${baseUrl}/oos`)
    .then( response => {
      dispatch({
        type : "OBJECTLIST",
        objectlist : response.body
      })
    })
    .catch(console.error);

}