import request from 'superagent'

const baseUrl = 'http://localhost:4000'


export const loadOOSlist = () => (dispatch, getState) => {
//  if (getState().objectlist) return

  request.get(`${baseUrl}/oos`)
    .then( response => {
      dispatch({
        type : "OBJECTLIST",
        objectlist : response.body
      })
    })
    .catch(console.error);

}


export const addObject = (data) => dispatch => {
  request
    .post(`${baseUrl}/oos`)
    .send(data)
    // .then(response => {
    //   dispatch({
    //     type : "ADDOBJECT",
    //     objectlist : response.body
    //   })
    // })
    .catch(console.error)
}


const objectFetched = object => ({
  type: "FETCHED",
  object
})


export const loadObject = (id) => dispatch => {
  request
    .get(`${baseUrl}/oos/${id}`)
//.send(id)
    .then(response => {
      dispatch(objectFetched(response.body))
    })
    .catch(console.error)
}