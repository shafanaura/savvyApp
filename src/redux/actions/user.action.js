import http from '../../helpers/http'

export const userDetail = (token) => {
  return async (dispatch) => {
    try {
      const response = await http(token).get(`user`)
      dispatch({
        type: 'DETAIL_USER',
        payload: response.data.results,
        message: response.data.message,
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_DETAIL_MESSAGE',
        payload: message,
      })
    }
  }
}

export const userData = (data) => {
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
        type: 'CREATE_DATA_USER',
        payload: data,
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_DATA_MESSAGE',
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
      const response = await http().post('auth', params)
      dispatch({
        type: 'CHECK_DATA_USER',
        payload: response.data.message,
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_UPDATE_MESSAGE',
        payload: message,
      })
    }
  }
}

export const updateUser = (token, data) => {
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
      const response = await http(token).patch(`user`, params)
      dispatch({
        type: 'UPDATE_USER',
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

export const allUser = (token, search, page) => {
  return async (dispatch) => {
    try {
      const response = await http(token).get(
        `users?search=${search ? search : ''}&page=${page ? page : 1}`,
      )
      dispatch({
        type: 'ALL_CONTACT',
        payload: response.data.results,
        pageInfo: response.data.pageInfo,
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

export const pagingContact = (token, search, page) => {
  return async (dispatch) => {
    try {
      const response = await http(token).get(
        `users?search=${search ? search : ''}&page=${page ? page : 1}`,
      )
      dispatch({
        type: 'PAGING_CONTACT',
        payload: response.data.results,
        pageInfo: response.data.pageInfo,
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

export const recipientDetail = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await http(token).get(`user/${id}`)
      dispatch({
        type: 'RECIPIENT_DETAIL',
        payload: response.data.results,
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
