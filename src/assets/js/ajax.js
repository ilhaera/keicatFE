import config from '../config.js'
const ajax = function (url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 201) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    }
    xhr.open('GET', config.serverurl + url)
    xhr.setRequestHeader('cache-control', 'no-cache')
    xhr.send()
  })
}
export default ajax
