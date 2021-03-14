import http from '../../helpers/http'

export const getUserDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: '',
      })
      const response = await http().get(`user/${id}`)
      dispatch({
        type: 'DETAIL_USER',
        payload: response.data.results,
        message: response.data.message,
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: message,
      })
    }
  }
}
export const getUserData = (data) => {
  return async (dispatch) => {
    const params = new URLSearchParams()
    if (data.phoneNumber) {
      params.append('phoneNumber', data.phoneNumber)
    }
    if (data.email) {
      params.append('email', data.email)
    }
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: '',
      })
      dispatch({
        type: 'CREATE_DATA_USER',
        payload: data,
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: message,
      })
    }
  }
}

export const checkData = (data) => {
  return async (dispatch) => {
    const params = new URLSearchParams()
    if (data.email) {
      params.append('email', data.email)
    }
    if (data.phoneNumber) {
      params.append('phoneNumber', data.phoneNumber)
    }
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: '',
      })
      const response = await http().post('auth', params)
      dispatch({
        type: 'CHECK_DATA_USER',
        payload: response.data.message,
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: message,
      })
    }
  }
}

export const updateUser = (token, id, data) => {
  return async (dispatch) => {
    const params = new FormData()
    if (data.picture) {
      params.append('picture', data.picture)
    }
    if (data.fullName) {
      params.append('fullName', data.fullName)
    }
    if (data.email) {
      params.append('email', data.email)
    }
    if (data.phoneNumber) {
      params.append('phoneNumber', data.phoneNumber)
    }
    if (data.password) {
      params.append('password', data.password)
    }
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: '',
      })
      const response = await http(token).patch(`user/${id}`, params)
      dispatch({
        type: 'UPDATE_USER',
        payload: response.data.message,
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: message,
      })
    }
  }
}
