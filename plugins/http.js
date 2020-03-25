export default function ({ $http }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $http.onError(error => {
    if (error.response.status === 500) {
      alert('Request Error!')
    }
  })
}
