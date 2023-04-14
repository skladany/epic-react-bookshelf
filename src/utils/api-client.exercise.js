import * as auth from 'auth-provider'
const apiURL = process.env.REACT_APP_API_URL

function client(
  endpoint,
  {token, headers: customHeaders, ...customConfig} = {},
) {
  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    const data = await response.json()

    // Log out user
    if (response.status === 401) {
      await auth.logout()
      window.location.assign(window.location)
      return Promise.reject({message: 'Please re-authenticate'})
    }

    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
